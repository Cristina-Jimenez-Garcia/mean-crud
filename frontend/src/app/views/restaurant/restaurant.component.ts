import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../services/restaurants.service';
import { Restaurants } from '../../models/restaurant';
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
  }


  addRestaurant(form:NgForm){

    if(form.value._id){
      this.restaurantsService.editRestaurant(form.value)
        .subscribe(res => {
          console.log(res);
           this.resetForm(form);
           M.toast({html:'Restaurant updated successfully'});
           this.getRestaurants();
        });
    }else{
      this.restaurantsService.createRestaurant(form.value)
       .subscribe( res => {
         console.log(res);
         this.resetForm(form);
         M.toast({html:'Restaurant save successfully'});
         this.getRestaurants();
     });
    }
  }

  deleteRestaurant(_id: String){
    if(confirm('Are you sure you want delete it?')){
      this.restaurantsService.deleteRestaurant(_id)
        .subscribe( res => {
          this.getRestaurants();
          M.toast({html:'Restaurant deleted successfully'});
        });
    }
  }

  resetForm(form:NgForm){
    if(form){
      form.reset();
      this.restaurantsService.selectedRestaurant = new Restaurants();
    }
  }

  editRestaurant(restaurant: Restaurants){
    this.restaurantsService.selectedRestaurant = restaurant;
  }

  getRestaurants(){
    this.restaurantsService.getRestaurants()
    .subscribe(res => {
        this.restaurantsService.restaurants = res as Restaurants[];
        console.log(res);
    });
  }

}
