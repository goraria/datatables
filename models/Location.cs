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
    
    }
}