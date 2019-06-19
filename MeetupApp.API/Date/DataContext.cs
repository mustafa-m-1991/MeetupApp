using MeetupApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace MeetupApp.API.Date
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base (options)
        
        {
           
        }
         public DbSet<Value> Values { get; set; }
    }
}