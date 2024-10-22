using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace datatables.Models {
    public class ObjectUser {
        public int IDUser { get; set; } = -1;
        public string Username { get; set; } = String.Empty;
        public string Password { get; set; } = String.Empty;
        public int Role { get; set; } = -1;
    }

    public class ModelUser {
        private readonly string connectionString = "Data Source=OSX;Initial Catalog=DataTables;Integrated Security=True;Trusted_Connection=True";

        public List<ObjectUser> ListAll() {
            List<ObjectUser> users = new List<ObjectUser>();

            using (SqlConnection connection = new SqlConnection(connectionString)) {
                string query = "SELECT * FROM User";
                SqlCommand cmd = new SqlCommand(query, connection);
                connection.Open();
                SqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read()) {
                    users.Add(new ObjectUser {
                        IDUser = (int)reader["IDUser"],
                        Username = reader["Username"].ToString(),
                        Password = reader["Password"].ToString(),
                        Role = (int)reader["Role"],
                    });
                }
            }

            return users;
        }

        public bool Add(ObjectUser user) {
            using (SqlConnection connection = new SqlConnection(connectionString)) {
                string query = "INSERT INTO User (Username, Password, Role, Country) VALUES (@Username, @Password, @Role)";
                SqlCommand cmd = new SqlCommand(query, connection);
                cmd.Parameters.AddWithValue("@Username", user.Username);
                cmd.Parameters.AddWithValue("@Password", user.Password);
                cmd.Parameters.AddWithValue("@Role", user.Role);
                connection.Open();
                return cmd.ExecuteNonQuery() > 0;
            }
        }

        public bool Update(ObjectUser user) {
            using (SqlConnection connection = new SqlConnection(connectionString)) {
                string query = "UPDATE User SET Username = @Username, Password = @Password, Role = @Role WHERE IDUser = @IDUser";
                SqlCommand cmd = new SqlCommand(query, connection);
                cmd.Parameters.AddWithValue("@IDUser", user.IDUser);
                cmd.Parameters.AddWithValue("@Username", user.Username);
                cmd.Parameters.AddWithValue("@Password", user.Password);
                cmd.Parameters.AddWithValue("@Role", user.Role);
                connection.Open();
                return cmd.ExecuteNonQuery() > 0;
            }
        }

        public bool Delete(int id) {
            using (SqlConnection connection = new SqlConnection(connectionString)) {
                string query = "DELETE FROM User WHERE IDUser = @IDUser";
                SqlCommand cmd = new SqlCommand(query, connection);
                cmd.Parameters.AddWithValue("@IDUser", id);
                connection.Open();
                return cmd.ExecuteNonQuery() > 0;
            }
        }
    }
}