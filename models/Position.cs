using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace datatables.Models {
    public class ObjectPosition {
        [Key]
        public int IDPosition { get; set; }
        public string NamePosition { get; set; }
    }

    public class ModelPosition {
        private static List<ObjectPosition> positions = new List<ObjectPosition>();

        public int IDPosition { get; set; }
        public string NamePosition { get; set; }

        public List<ObjectPosition> GetAllPositions() {
            return positions;
        }

        public ObjectPosition GetPositionById(int id) {
            return positions.FirstOrDefault(p => p.IDPosition == id);
        }

        public void AddPosition(ModelPosition model) {
            positions.Add(new ObjectPosition {
                IDPosition = positions.Count + 1,
                NamePosition = model.NamePosition
            });
        }

        public void UpdatePosition(ModelPosition model) {
            var position = positions.FirstOrDefault(p => p.IDPosition == model.IDPosition);
            if (position != null) {
                position.NamePosition = model.NamePosition;
            }
        }

        public void DeletePosition(int id) {
            var position = positions.FirstOrDefault(p => p.IDPosition == id);
            if (position != null) {
                positions.Remove(position);
            }
        }
    }
}