using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace datatables.Models {
    public class ObjectDemo {
        [Key]
        public int EmployeeID { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public int Age { get; set; }

        public string State { get; set; }
        public string Country { get; set; }
    }

    public class ModelDemo {
        private readonly string connectionString = "Data Source=OSX;Initial Catalog=MVCDB;Integrated Security=True;Trusted_Connection=True";

        public List<ObjectDemo> ListAll() {
            List<ObjectDemo> employees = new List<ObjectDemo>();

            using (SqlConnection conn = new SqlConnection(connectionString)) {
                string query = "SELECT * FROM Employee";
                SqlCommand cmd = new SqlCommand(query, conn);
                conn.Open();
                SqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read()) {
                    employees.Add(new ObjectDemo {
                        EmployeeID = (int)reader["EmployeeID"],
                        Name = reader["Name"].ToString(),
                        Age = (int)reader["Age"],
                        State = reader["State"].ToString(),
                        Country = reader["Country"].ToString()
                    });
                }
            }

            return employees;
        }

        public bool Add(ObjectDemo employee) {
            using (SqlConnection conn = new SqlConnection(connectionString)) {
                string query = "INSERT INTO Employee (Name, Age, State, Country) VALUES (@Name, @Age, @State, @Country)";
                SqlCommand cmd = new SqlCommand(query, conn);
                cmd.Parameters.AddWithValue("@Name", employee.Name);
                cmd.Parameters.AddWithValue("@Age", employee.Age);
                cmd.Parameters.AddWithValue("@State", employee.State);
                cmd.Parameters.AddWithValue("@Country", employee.Country);
                conn.Open();
                return cmd.ExecuteNonQuery() > 0;
            }
        }

        public bool Update(ObjectDemo employee) {
            using (SqlConnection conn = new SqlConnection(connectionString)) {
                string query = "UPDATE Employee SET Name = @Name, Age = @Age, State = @State, Country = @Country WHERE EmployeeID = @EmployeeID";
                SqlCommand cmd = new SqlCommand(query, conn);
                cmd.Parameters.AddWithValue("@EmployeeID", employee.EmployeeID);
                cmd.Parameters.AddWithValue("@Name", employee.Name);
                cmd.Parameters.AddWithValue("@Age", employee.Age);
                cmd.Parameters.AddWithValue("@State", employee.State);
                cmd.Parameters.AddWithValue("@Country", employee.Country);
                conn.Open();
                return cmd.ExecuteNonQuery() > 0;
            }
        }

        public bool Delete(int id) {
            using (SqlConnection conn = new SqlConnection(connectionString)) {
                string query = "DELETE FROM Employee WHERE EmployeeID = @EmployeeID";
                SqlCommand cmd = new SqlCommand(query, conn);
                cmd.Parameters.AddWithValue("@EmployeeID", id);
                conn.Open();
                return cmd.ExecuteNonQuery() > 0;
            }
        }
    }
}