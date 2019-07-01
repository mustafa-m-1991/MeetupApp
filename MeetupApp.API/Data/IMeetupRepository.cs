using System.Collections.Generic;
using System.Threading.Tasks;
using MeetupApp.API.Models;

namespace MeetupApp.API.Data
{
    public interface IMeetupRepository
    {
         void Add <T>(T entity) where T: class;
         void Delete <T>(T entity) where T: class;
         Task <bool> SaveAll();
         Task <IEnumerable<User>> GetUsers();
         Task <User> GetUser(int Id);

    }
}