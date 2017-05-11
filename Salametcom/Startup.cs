using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Salametcom.Startup))]
namespace Salametcom
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
