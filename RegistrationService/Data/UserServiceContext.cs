using Microsoft.EntityFrameworkCore;

namespace RegistrationService.Data
{
    public class UserServiceContext : DbContext
    {
        public UserServiceContext(DbContextOptions<UserServiceContext> options)
            : base(options)
        {
        }

        public DbSet<Models.User> User { get; set; }
    }
}
