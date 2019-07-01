using System.Collections.Generic;
using System.Threading.Tasks;
using MeetupApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace MeetupApp.API.Data
{
    public class MeetupRepository : IMeetupRepository
    {
        private readonly DataContext context;
        public MeetupRepository(DataContext context) { 
            this.context = context;
        }
            
        public void Add<T>(T entity) where T : class
        {
            context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            context.Remove(entity);
        }

        public async Task<User> GetUser(int Id)
        {
            var user = await context.Users.Include(p => p.Photos ).FirstOrDefaultAsync(u => u.Id == Id);
            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
              var user = await context.Users.Include(p => p.Photos ).ToListAsync();
            return user;
        }

        public async Task<bool> SaveAll()
        {
            return await context.SaveChangesAsync() > 0;

        }
    }
}