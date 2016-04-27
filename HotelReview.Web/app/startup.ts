angular.module("mvcapp", []);
module mvcapp {
    'use strict';

    //var mvcapp = 

    export interface Hotel {
        hotelId: number;
        name: string;
        addressLine1: string;
        addressLine2: string;
        city: string;
        state: string;
        pincode: number;
        contactNumber: string;
    }

    export interface HotelReview {
        reviewId: number;
        hotelId: number;
        reviewerName: string;
        rating: number;
        commemts: string;
        reviewDate: Date;
    }
}
