require_relative 'vertex'
require_relative 'edge'

# Questions:
# TODO:Other than ensuring it's surrounded by consecutive edges, what does a face do?
#   Attach to another face?
# Help me make this ensure_cyclic less complicated.

class Face
  attr_reader :edges, :vertices, :neighboring_faces
  def initialize(edges_array, neighboring_faces = {})
    raise "Not enough edges" if edges_array.length < 3
    @edges = edges_array
    vertices = edges_array.map{ |edge| edge.connection}.inject(:+).uniq
    @vertices = ensure_cyclic(vertices)
    @neighboring_faces = neighboring_faces
    @neighbor_id = @neighboring_faces.length
  end

  def add_neighbor(face)
    # face_info is a catalog of information about the face's neighbor
    # It has three properties: face, which is the neighbor face itself,
      # as well as "shared_vertices" and "shared_edges".
    face_info = {}
    face_info["face"] = face
    face_info["shared_vertices"] = @vertices.select{|vertex| face.vertices.include?(vertex)}
    face_info["shared_edges"] = @edges.select{|edge| face.edges.include?(edge)}
    @neighboring_faces[@neighbor_id] = face_info
    @neighbor_id += 1
  end

  def remove_neighbor(neighbor_id)
    @neighboring_faces[neighbor_id].delete
  end

  def ensure_cyclic(vertices)
    connect_testers = vertices.dup
    connected_vertices = []
    connected_vertices << connect_testers.pop
    until connected_vertices.length == vertices.length
      continue = false
      connect_testers.each do |vert|
        if (connected_vertices.last).is_connected?(vert)
          connected_vertices << vert
          continue = true
          break
        end
      end
      connect_testers.delete(connected_vertices.last)
      raise "Not cyclic edges" if continue == false
    end
    connected_vertices
  end

end
