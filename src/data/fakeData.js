const fData = [
    {
        name: "Rajuk Uttara Model College",
        id: 1,
        location: "Uttara",
        image: "https://i.ytimg.com/vi/CG3SWQXGcVk/maxresdefault.jpg",
        estd: 1981,
        board: "Dhaka",
        students: 5000,
        rating: 5
    },
    {
        name: "Motijheel Model College",
        id: 2,
        location: "Motijhel",
        image: "http://mmodel.edu.bd/assets/images/motijheel.jpg",
        estd: 1981,
        board: "Dhaka",
        students: 5000,
        rating: 3
    },
    {
        name: "Holy Cross College",
        id: 3,
        location: "farmgate",
        image: "https://studybarta.files.wordpress.com/2018/05/hccbd.jpg",
        estd: 1781,
        board: "Dhaka",
        students: 3000,
        rating: 4
    },
    {
        name: "Govt Science College",
        id: 4,
        location: "Tejgoan",
        image: "https://d30fl32nd2baj9.cloudfront.net/media/2015/07/01/govt.-science-college-tejga.jpg/BINARY/Govt.-Science-College-Tejga.jpg",
        estd: 1861,
        board: "Dhaka",
        students: 2000,
        rating: 2
    },
    {
        name: "Tejgoan College",
        id: 5,
        location: "Dhaka",
        image: "https://lh5.googleusercontent.com/p/AF1QipPhrnKbTlK-5BdKwdv3c3CAxLtH4ETvrv-iOpGx=w1080-k-no",
        estd: 1981,
        board: "Dhaka",
        students: 6000,
        rating: 1
    },
    {
        name: "Shiddheshwari Girls College",
        id: 6,
        location: "Santinagar",
        image: "http://siddheswaricollege.weebly.com/uploads/5/8/7/8/58782851/12278830-904307756319895-406035228316097303-n_1.jpg",
        estd: 1989,
        board: "Dhaka",
        students: 4500,
        rating: 4
    },
    {
        name: "Begum Rokeya College",
        id: 7,
        location: "Rangpur",
        image: "https://lh3.googleusercontent.com/p/AF1QipNLe_-Mz_DJL6W4k46WQMvgRXITGaa0c3pe4jK2=s1600-w400",
        estd: 1951,
        board: "Rangpur",
        students: 3500,
        rating: 1
    },
    {
        name: "Devendra College",
        id: 8,
        location: "Manikganj",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNb9ZYOCHmCzaqSSNKHqOkI1XfcwUbS8ZH-xz9gimrtwDkYBTWQio6iSIM7CulqBUnV9Y&usqp=CAU",
        estd: 1861,
        board: "Manikganj",
        students: 5300,
        rating: 2
    },
    {
        name: "Milestone College",
        id: 9,
        location: "Uttara",
        image: "",
        estd: 1981,
        board: "Dhaka",
        students: 5000,
        rating: 3
    },
    {
        name: "Cambrian College",
        id: 10,
        location: "Uttara",
        image: "https://www.cambrian.edu.bd/fontend-assets/images/courses/hsc.jpg",
        estd: 1981,
        board: "Dhaka",
        students: 400,
        rating: 1
    },
    {
        name: "Viqrunnisa-Nun College",
        id: 11,
        location: "Mirpur",
        image: "https://www.vnsc.edu.bd/frontend/vnsc/images/main.png",
        estd: 1981,
        board: "Dhaka",
        students: 4200,
        rating: 5
    },
    {
        name: "Ideal College",
        id: 12,
        location: "Dhaka",
        image: "https://lh5.googleusercontent.com/p/AF1QipNrn57htC-BpVEnbsSQYDGdMtHgawgABAL6BSBb=w1080-k-no",
        estd: 1981,
        board: "Dhaka",
        students: 500,
        rating: 3
    },
    {
        name: "City College",
        id: 13,
        location: "Nilkhet",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07RPXnvAT9c516cUcXevi7SH7XidvZQathX7nQhs0_VPdxuvrcjshACwDBLbk0nrpKS8&usqp=CAU",
        estd: 1981,
        board: "Dhaka",
        students: 3200,
        rating: 2
    },
    {
        name: "Notre Dame College",
        id: 14,
        location: "Motijheel",
        image: "https://lh5.googleusercontent.com/p/AF1QipOhGqMjYpFjhXF65XyxRhaO48KHUDWCEZnexxvt=w1080-k-no",
        estd: 1981,
        board: "Dhaka",
        students: 2500,
        rating: 5
    },
    {
        name: "kadir Mollah City College",
        id: 15,
        location: "Narshingdi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzCb4jrgQ83MQcAki0P55f30UALcU-sSJy2qQwZ1o9-RzvEW1PuW1xGm9ksuJb9nJc7tk&usqp=CAU",
        estd: 1987,
        board: "Dhaka",
        students: 1500,
        rating: 4
    },
    {
        name: "Chittagong College",
        id: 16,
        location: "Chittagong",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Inside_the_Chittagong_college.jpg/220px-Inside_the_Chittagong_college.jpg",
        estd: 1905,
        board: "Chittagong",
        students: 5500,
        rating: 4
    },
    {
        name: "Rajshahi College",
        id: 17,
        location: "Rajshahi",
        image: "",
        estd: 1841,
        board: "Rajshahi",
        students: 3800,
        rating: 4
    },
    {
        name: "Dhaka College",
        id: 18,
        location: "Dhaka",
        image: "",
        estd: 1781,
        board: "Dhaka",
        students: 5400,
        rating: 4
    },
    {
        name: "BAF Shaheen College",
        id: 19,
        location: "Mohakhali",
        image: "",
        estd: 1951,
        board: "Dhaka",
        students: 1900,
        rating: 3
    },
    {
        name: "Dhaka Commerece College",
        id: 20,
        location: "Dhaka",
        image: "https://bd.top10place.com/img_files/366106833583310",
        estd: 1965,
        board: "Dhaka",
        students: 2700,
        rating: 3
    }
]