import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPackage } from '../travelAway-interfaces/Package';
import { ICategory } from '../travelAway-interfaces/Category';
import { PackageService } from "../../travelAway-services/package-service/package.service";
@Component({
  selector: 'app-view-packages',
  templateUrl: './view-packages.component.html',
  styleUrls: ['./view-packages.component.css']
})
export class ViewPackagesComponent implements OnInit {
  packages!: IPackage[];
  categories!: ICategory[];
  filteredPackages!: IPackage[];
  errorMsg!: string;
  showMsg!: boolean;
  imagePath!: string;
  userRole: string;
  customerLayout: boolean = false;
  commonLayout: boolean = false;

  constructor(private packageService: PackageService, private router: Router) {

    this.userRole = sessionStorage.getItem('userRole')|| '';
    if (this.userRole != "Customer") {
      this.router.navigate(['/login/1']);
    } else if (this.userRole == "Customer") {
      this.customerLayout = true;
    }
  }

  ngOnInit(): void {
    this.getPackages();
    this.getCategories();

    if (this.packages == null) {
      this.showMsg = true;
    }

    this.filteredPackages = this.packages

    this.imagePath = "src/assets/"
  }
  getPackages() {
    this.packageService.getPackages().subscribe(
      responseGet => {
        this.showMsg = false;
        this.packages = responseGet;
        this.filteredPackages = responseGet
        console.log(this.filteredPackages)
      },
      resonseError => {
        this.showMsg = true
        this.packages = []
        this.errorMsg = resonseError
      },
      () => console.log("GetPackage method executed")
    )
  }

  getCategories() {
    this.packageService.getCategories().subscribe(
      responseGet => {
        this.categories = responseGet
        console.log(this.categories)
      },
      responseError => {
        this.errorMsg = responseError
        this.categories = []
      },
      () => console.log("Get categories executed")
    )
  }

  searchPackageByCategory(categoryId: string) {
   
    var catid = parseInt(categoryId)
    if (catid > 0) {
      console.log(catid)
      this.filteredPackages = this.packages.filter(prod => prod.packageCategoryId == catid);
    }
    console.log(this.filteredPackages);
  }

  viewPackageDetails(packageId: number,packageName:string) {
    console.log(packageId);
    this.router.navigate(['viewPackageDetails', packageId,packageName]);
  }
}
