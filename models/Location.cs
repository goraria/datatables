using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace datatables.Models {
    public class ObjectLocation {
        [Key]
        public int IDLocation { get; set; }
        public string Tower { get; set; }
        public string Street { get; set; }
        public string District { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
    }

    public class ModelLocation {
        private static List<ObjectLocation> locations = new List<ObjectLocation>();

        public List<ObjectLocation> GetAllLocations() {
            return locations;
        }

        public ObjectLocation GetLocationById(int id) {
            return locations.FirstOrDefault(l => l.IDLocation == id);
        }

        public void AddLocation(ObjectLocation location) {
            location.IDLocation = locations.Count + 1;
            locations.Add(location);
        }

        public void UpdateLocation(ObjectLocation location) {
            var existingLocation = locations.FirstOrDefault(l => l.IDLocation == location.IDLocation);
            if (existingLocation != null) {
                existingLocation.Tower = location.Tower;
                existingLocation.Street = location.Street;
                existingLocation.District = location.District;
                existingLocation.City = location.City;
                existingLocation.State = location.State;
                existingLocation.Country = location.Country;
            }
        }

        public void DeleteLocation(int id) {
            var location = locations.FirstOrDefault(l => l.IDLocation == id);
            if (location != null) {
                locations.Remove(location);
            }
        }
    }
}