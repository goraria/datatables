using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace datatables.Models {
    public class ObjectMember {
        [Key]
        public int IDMember { get; set; }
        public int IDUser { get; set; }
        public int IDLocation { get; set; }
        public int IDPosition { get; set; }

        //[Required]
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Gender { get; set; }
        public int Salary { get; set; }

        public DateTime DateOfBirth { get; set; }
        public DateTime DateOfStart { get; set; }
        public DateTime DateModified { get; set; }
    }

    public class ModelMember {
        public List<ObjectMember> Members { get; set; }
    }
}