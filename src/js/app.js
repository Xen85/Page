angular.module('todoApp', [])
    .controller('mainController', [ '$scope', function($scope){
        var todoList = this;

        todoList.deals = [
            {
                "id": "75b1e387-1a4d-4f67-9b8b-6ad8cebfe808",
                "image": "http://lorempixel.com/400/300/food/8/",
                "price": 48.4117,
                "title": "Super Deal",
                "place": {
                    "id": "77a9f3a6-a2b1-4de6-94d3-ebb8b5686475",
                    "name": "Place 1",
                    "address": "10th Ave NY",
                    "zipcode": 12525,
                    "latitude": 8.292055,
                    "longitude": 44.375352
                }
            },
            {
                "id": "854392a3-e5e2-4fd4-b7ae-3638e6d34237",
                "image": "http://lorempixel.com/400/300/food/4/",
                "price": 25.5034,
                "title": "Super Deal",
                "place": {
                    "id": "507b5ad1-3fad-4239-9ea9-58fd19adac34",
                    "name": "Place 2",
                    "address": "9th Ave NY",
                    "zipcode": 13279,
                    "latitude": 80.240556,
                    "longitude": -52.159256
                }
            },
            {
                "id": "c5f74920-6269-4d00-8ddb-7c6be1b59029",
                "image": "http://lorempixel.com/400/300/food/1/",
                "price": 56.9434,
                "title": "Super Deal",
                "place": {
                    "id": "03aed044-be5c-471a-a14a-63c78163e30f",
                    "name": "Place 3",
                    "address": "13th Ave NY",
                    "zipcode": 14629,
                    "latitude": -3.192708,
                    "longitude": -78.768446
                }
            },
            {
                "id": "ff2063f2-834f-4889-bf02-0520bc5c6a22",
                "image": "http://lorempixel.com/400/300/food/10/",
                "price": 12.6954,
                "title": "Awesome Deal",
                "place": {
                    "id": "16072bae-539b-4fab-af3d-35601f5bd3ea",
                    "name": "Place 4",
                    "address": "15th Ave NY",
                    "zipcode": 13874,
                    "latitude": -45.93758,
                    "longitude": 29.596873
                }
            },
            {
                "id": "19da9cd1-d1bf-4595-95ac-8f48145c68d0",
                "image": "http://lorempixel.com/400/300/food/7/",
                "price": 47.0095,
                "title": "Incredible Deal",
                "place": {
                    "id": "d058bd1b-38c1-4edf-8cee-c5c0e32b4cda",
                    "name": "Place 5",
                    "address": "10th Ave NY",
                    "zipcode": 12852,
                    "latitude": -80.792708,
                    "longitude": -83.932696
                }
            },
            {
                "id": "311ea174-f985-4d17-bc67-f3d3348499de",
                "image": "http://lorempixel.com/400/300/food/7/",
                "price": 30.3022,
                "title": "Super Deal",
                "place": {
                    "id": "28df9241-9408-4011-ab86-8e9786ec502b",
                    "name": "Place 6",
                    "address": "12th Ave NY",
                    "zipcode": 14989,
                    "latitude": -3.136937,
                    "longitude": 113.93814
                }
            }
        ];




    }]);