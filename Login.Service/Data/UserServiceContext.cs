using Microsoft.EntityFrameworkCore;

namespace Login.Service.Data
{
    public class UserServiceContext : DbContext
    {
        public UserServiceContext(DbContextOptions<UserServiceContext> options)
            : base(options)
        {
        }

        public DbSet<LoginService.Models.User> User { get; set; }
    }
}
