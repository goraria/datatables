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
        
    }
}