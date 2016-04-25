module mvcapp {
    'use strict';
    export interface IHotelService {
        getHotels: () => ng.IPromise<Hotel[]>;
        getHotelReviews: (hotelId: number) => ng.IPromise<HotelReview[]>;
    }

    class HotelService implements IHotelService {
        getHotels: () => ng.IPromise<Hotel[]>;
        getHotelReviews: (hotelId: number) => ng.IPromise<HotelReview[]>;
        static $inject = ['webRequest'];
        constructor(webRequest : IWebRequest) {
            var vm = this;

            vm.getHotels = (): ng.IPromise<Hotel[]> => {
                return webRequest.get<Hotel[]>('api/hotel').then(result => result);
            }

            vm.getHotelReviews = (hotelId: number): ng.IPromise<HotelReview[]>=> {
                return webRequest.get<HotelReview[]>('api/HotelReview', { hotelId : hotelId }).then(result => result);
            }
        }
    }

    angular.module('mvcapp').service('hotelService', HotelService);
}