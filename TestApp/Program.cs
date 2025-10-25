using System;
using TravelAwayDAL;


namespace MyTravelTestApp
{
    internal class Program
    {

        static TravelAwayRepository repository = new TravelAwayRepository();
        static void Main(string[] args)
        {
            GetPackages();
        }

        public static void GetPackages()
        {
            var packages = repository.GetPackages();
            foreach (var item in packages)
            {
                Console.WriteLine(item.PackageName);
            }

        }
    }
}
