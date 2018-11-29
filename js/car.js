new Vue({
    el:'#app',
    data:{
        
        productList:[
            {
                'pic':'images/carshop1.jpg',
                'shop':'自营',
                'res':' Candies女装气质秋冬连衣裙2018秋季新款收腰显瘦',
                'size':'S',
                'dPrice':219,
                'dePrice':459,
                'rPrice':175.2,
                'sPrice':43.8,
                'num':1,

            },
            {
                'pic':'images/carshop2.jpg',
                'shop':'自营',
                'res':'【囤货装神仙水】SK-II大容量神仙水惠选套装 面部补水保湿精华',
                'size':'均码',
                'dPrice':1980,
                'dePrice':2285,
                'rPrice':1800,
                'sPrice':180,
                'num':1,
            
            },
            {
                'pic':'images/carshop3.jpg',
                'shop':'自营',
                'res':'BERING 白令简约新品环保光动能超长待机精致dw女士手表',
                'size':'均码',
                'dPrice':1472,
                'dePrice':2976,
                'rPrice':1450,
                'sPrice':22,
                'num':1,
            },
        ],
        //sPrice:0,

    },
    methods:{
        minus(index){
            if(this.productList[index].num>1){
                this.productList[index].num--;
            }else{
                this.productList[index].num=1;
            }
        },
        add(index){
            this.productList[index].num++;
        },
        sum(){
            let sum = 0;
            this.productList.forEach(function(val,index){
                sum += val.dPrice*val.num;
            })
            return sum;
        },
        sSum(){
            let sum = 0;
            this.productList.forEach(function(val,index){
                sum += val.sPrice*val.num;
            })
            return sum;
        },
        rSum(){
            let sum = 0;
            this.productList.forEach(function(val,index){
                sum += val.rPrice*val.num;
            })
            return sum;
        },
        sNum(){
            let sum = 0;
            this.productList.forEach(function(val,index){
                sum += val.num;
            })
            return sum;
        },
        del(index){
            let a = this.productList.splice(index,1);
            console.log(a);
        }


    },
})