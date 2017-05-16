using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DB
{
    public class Database
    {
        public List<Users> users;

        public Database()
        {
            users = new List<Users>();
            users.Add(new Users() { id = 1, username = "salam" });
        }
    }
}
