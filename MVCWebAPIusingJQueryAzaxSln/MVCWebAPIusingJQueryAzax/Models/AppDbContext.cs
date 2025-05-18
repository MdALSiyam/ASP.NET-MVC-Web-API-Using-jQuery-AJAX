using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MVCWebAPIusingJQueryAzax.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext():base("AppDbContext") {}
        public virtual DbSet<Person> Persons { get; set; }
    }
}