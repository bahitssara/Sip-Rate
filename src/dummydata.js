export default {
    'users': [
        {
            'id': '1',
            'user_name': 'Unicorn123',
            'email': 'unicornsarecool@email.com',
            'password':'unicornlover'
        },
        {
            'id': '2',
            'user_name': 'Wombat123',
            'email': 'wombatssarecool@email.com',
            'password':'wombatlover'
        },
        {
            'id': '3',
            'user_name': 'Koala123',
            'email': 'koalasarecool@email.com',
            'password':'koalalover'
        },
        {
            'id': '4',
            'user_name': 'Dragon123',
            'email': 'dragonssarecool@email.com',
            'password':'dragonlover'
        }
    ],

    'beverages': [
        {
            'id':'1',
            'bev_type': 'wine',
            'bev_name':'Pinot Grigio',
            'description': 'A white wine',
            'overall_rating': '5',
        },
        {
            'id':'2',
            'bev_type': 'beer',
            'bev_name':'Coors Light',
            'description': 'A light beer',
            'overall_rating': '1',
        },
        {
            'id':'3',
            'bev_type': 'wine',
            'bev_name':'Cabernet Sauvingon',
            'description': 'A red wine',
            'overall_rating': '4',
        },
        {
            'id':'4',
            'bev_type': 'beer',
            'bev_name':'Milk Stout',
            'description': 'A dark beer',
            'overall_rating': '3',
        },
    ],

    'reviews': [
        {
            'id': '1',
            'bev_type':'wine',
            'bev_name':'Pinot Grigio',
            'user_review':'This wine was delicious! Would have it again',
            'rating':'5',
            'date_modified': '6/5/2019',
            'bev_id': '1',
            'user_id': '1'
        },
        {
            'id': '2',
            'bev_type':'beer',
            'bev_name':'Coors Light',
            'user_review':'This beer was not good! Would not have it again',
            'rating':'1',
            'date_modified': '6/5/2019',
            'bev_id': '2',
            'user_id': '2'
        },
        {
            'id': '3',
            'bev_type':'wine',
            'bev_name':'Cabernet Sauvignon',
            'user_review':'This wine was wonderful! Would have it again',
            'rating':'4',
            'date_modified': '6/5/2019',
            'bev_id': '3',
            'user_id': '3'
        },
        {
            'id': '4',
            'bev_type':'beer',
            'bev_name':'Milk Stout',
            'user_review':'This beer was very good! Would have it again',
            'rating':'3',
            'date_modified': '6/5/2019',
            'bev_id': '4',
            'user_id': '4'
        }
    ]
}

