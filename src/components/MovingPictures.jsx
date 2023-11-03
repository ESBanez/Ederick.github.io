import "../sass/MovingPictures.scss";

const Logos = [
    {
        name: "material",
        id: 1,
        path: "https://cdn-images-1.medium.com/max/2400/1*FDNeKIUeUnf0XdqHmi7nsw.png",
        alt: "material logo",
    },
    {
        name: "rest",
        id: 2,
        path: "https://www.opc-router.com/wp-content/uploads/2020/04/icon_rest_webservice_600x400px-555x369.png",
        alt: "rest logo",
    },
    {
        name: "reactjs",
        id: 3,
        path: "https://www.webinartechnologies.com/wp-content/uploads/2020/10/reactjs-980x521.png",
        alt: "reactjs logo",
    },
    {
        name: "instagram",
        id: 4,
        path: "https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png",
        alt: "instagram logo",
    },
    {
        name: "vercel",
        id: 5,
        path: "https://nextjs.org/_next/image?url=https:%2F%2Fwww.datocms-assets.com%2F35255%2F1665957463-sponsor-logo-vercel.png&w=750&q=75",
        alt: "vercel logo",
    },
    {
        name: "github",
        id: 6,
        path: "https://media-exp1.licdn.com/dms/image/C5622AQH6M9sd0I8Kmw/feedshare-shrink_2048_1536/0/1670192017358?e=2147483647&v=beta&t=q_v31EqAV6EJce9Se7XAY4-slHuniJA_DVjqXX3L_Lo",
        alt: "github logo",
    },
    {
        name: "vite",
        id: 7,
        path: "https://cdn.cleancommit.io/blog/2023/02/Vite-logo.jpg",
        alt: "vite logo",
    },
    {
        name: "PHP",
        id: 8,
        path: "https://th.bing.com/th/id/R.66d0565df0c989b3426a281f4becda90?rik=2y5a%2f4NC2poegw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fphp-logo-transparent%2fphp-logo-transparent-21.jpg&ehk=PXjnCOaDI8PwObpykugKSa9nQS2dbjECY0IlIPjbYqE%3d&risl=&pid=ImgRaw&r=0",
        alt: "PHP logo",
    },
    {
        name: "laravel",
        id: 9,
        path: "https://www.mashupstack.com/assets/image/course-images/mashupstack_laravel.jpg?version=2.11",
        alt: "laravel logo",
    },
    {
        name: "canva",
        id: 10,
        path: "https://atp.vn/wp-content/uploads/2021/10/1200x630wa.png",
        alt: "canva logo",
    },
    {
        name: "postman",
        id: 11,
        path: "https://r00t4bl3.com/uploads/postman-295a12547c5f7c3320143dd0dbe54084.png",
        alt: "postman logo",
    },
    {
        name: "bootstrap",
        id: 12,
        path: "https://th.bing.com/th/id/OIP.vEYQQipBpnJK30tZzyxlCwHaDT?pid=ImgDet&rs=1",
        alt: "bootstrap logo",
    },
    {
        name: "tailwind",
        id: 13,
        path: "https://cdn.hashnode.com/res/hashnode/image/upload/v1687204510684/ac7dcf9b-8ddb-4856-bfef-a61bec8659b0.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        alt: "tailwind logo",
    },
    {
        name: "sass",
        id: 14,
        path: "https://th.bing.com/th/id/OIP.5OeXpZGrulxTYggn1aJ3_gAAAA?pid=ImgDet&rs=1",
        alt: "sass logo",
    },
    {
        name: "mysql",
        id: 15,
        path: "https://2.bp.blogspot.com/-zE5mMBsCXxQ/WFYZO4VQvQI/AAAAAAAACDk/dArGjl4teHMtf3YDTo-tTPk_Tf3O_7NygCLcB/w1200-h630-p-k-no-nu/mysql.png",
        alt: "mysql logo",
    },
    {
        name: "apache",
        id: 16,
        path: "https://logos-download.com/wp-content/uploads/2016/06/Apache_logo.png",
        alt: "apache logo",
    },
    {
        name: "material",
        id: 17,
        path: "https://blog.openreplay.com/assets/hero_1iwMF7.png",
        alt: "material logo",
    },
    {
        name: "google",
        id: 18,
        path: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
        alt: "google logo",
    },
    {
        name: "reactjs",
        id: 19,
        path: "https://www.webinartechnologies.com/wp-content/uploads/2020/10/reactjs-980x521.png",
        alt: "reactjs logo",
    },
    {
        name: "instagram",
        id: 20,
        path: "https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png",
        alt: "instagram logo",
    },
    {
        name: "vercel",
        id: 21,
        path: "https://nextjs.org/_next/image?url=https:%2F%2Fwww.datocms-assets.com%2F35255%2F1665957463-sponsor-logo-vercel.png&w=750&q=75",
        alt: "vercel logo",
    },
    {
        name: "github",
        id: 22,
        path: "https://www.mittun.com/wp-content/uploads/2017/06/github-logo_apps-used-by-mittun_600x300-v2.png",
        alt: "github logo",
    },
    {
        name: "vite",
        id: 23,
        path: "https://cdn.cleancommit.io/blog/2023/02/Vite-logo.jpg",
        alt: "vite logo",
    },


];

function MovingPictures() {
    return (
        <>
            <div className="slider">
                <div className="slide-track">
                    {Logos.map((logo) => (
                        <div className="slide" key={logo.id}>
                            <img src={logo.path} height="60" width="120" alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MovingPictures;