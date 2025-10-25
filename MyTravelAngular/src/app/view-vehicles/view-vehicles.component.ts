import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../travelAway-services/package-service/package.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-vehicles',
  templateUrl: './view-vehicles.component.html',
  styleUrls: ['./view-vehicles.component.css']
})
export class ViewVehiclesComponent implements OnInit {
  userRole!: string;
  vehicles!: any[];
  errorMsg: any;
  vehiclesAvailable=false
  constructor(private packageService: PackageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userRole = sessionStorage.getItem('userRole')||'';
    if (this.userRole != "Employee") {
      this.router.navigate(['/login/2']);
    }
    this.getVehicles();
  }
  getVehicles() {
    this.packageService.getVehicles().subscribe(
      responseVehicleStatus => {
        this.vehicles = responseVehicleStatus;
        if (responseVehicleStatus.length > 0) {
          this.vehiclesAvailable = true
        }
      },
      responseVehicleError => {
        this.errorMsg = responseVehicleError;
      },
      () => console.log("ViewVehicles method executed successfully")
    );
  }

}
