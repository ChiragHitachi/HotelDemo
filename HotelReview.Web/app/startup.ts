angular.module("mvcapp", []);
module mvcapp {
    'use strict';

    //var mvcapp = 

    export interface Hotel {
        HotelId: number;
        Name: string;
        AddressLine1: string;
        AddressLine2: string;
        City: string;
        State: string;
        Pincode: number;
        ContactNumber: string;
    }

    export interface HotelReview {
        ReviewId: number;
        HotelId: number;
        ReviewerName: string;
        Rating: number;
        Commemts: string;
        ReviewDate: Date;
    }
}
