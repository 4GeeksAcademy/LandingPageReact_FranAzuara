import React from "react";
import Card from "./card";

const GalleryCard = () => {
    return (
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
                <div className="col-lg-3">
                    <div className="card text-center h-100">
                        <img
                            src="https://www.pioneerdj.com/-/media/pioneerdj/images/news/2020/hdj-cue1/hdj-cue1-news-article-1200x630-3.jpg?mw=1024&hash=30DCF605D11A008EDADC69FEEAEF9114"
                            class="card-img-top h-50"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Dj CUE1</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </p>
                            <a href="https://www.amazon.es/Pioneer-DJ-HDJ-CUE1-Auriculares/dp/B08GCM6WVM/ref=asc_df_B08GCM6WVM?mcid=d45e677bc5753984866aff0085c47a15&tag=googshopes-21&linkCode=df0&hvadid=699800233345&hvpos=&hvnetw=g&hvrand=7205916179394512802&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9209546&hvtargid=pla-942387418062&psc=1&gad_source=1" data-mdb-ripple-init target="_blank" className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                </div>
                <Card 
                    imgUrl="https://soloproaudio.com/wp-content/uploads/2024/11/FLX-EDIT-2.jpg"
                    cardTitle="DJ Pioneer FLX10"
                    infoUrl="https://www.amazon.es/Pioneer-DJ-DDJ-FLX10-Controlador-plataformas/dp/B0BTWB72RM/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2IHUVIWFOQCQ&dib=eyJ2IjoiMSJ9.FAD1Nm0dE4e2GtEhYzL2fmYxbldo9yYh-WUcjRCaMwcbLnQBKuRsXVtOLBMOJnCmCsVsNHY1WZKDd_bbPCA6ZNFuub1yCghwmhMLyZ_z7UTK_rMHYFO11bSHzwH9UO-R5i1Wx81gbnGqeoN1km1tMlGSDd-pBa7Di0xGcDeE1yykn-e3t4Y3ZVLAVmr3h5Ufj0Oy-3WBVoIr6rYc_8_l8HkrjZLBYsgS3gCmN0YQtAL9p4Lqqpnmy3b7byimE3-hPeWYznXmiW5R3Wi_DKYTm3nF2GGGZxBZSyKkj66LK0c.y6vnTiJkpFbm8Mph-T5Qt1Zf2vju2cFGw9GQd72c6-I&dib_tag=se&keywords=flx+10&nsdOptOutParam=true&qid=1733568335&s=musical-instruments&sprefix=flx10%2Cmi%2C93&sr=1-2"></Card>
                <Card 
                    imgUrl="https://www.pioneerdj.com/-/media/pioneerdj/images/features/monitor-speakers/dm-50d/dm-50d_accordion-advanced-design-1770x1300-pc_0.jpg"
                    cardTitle="Altavoces DM-50 bt"
                    infoUrl="https://www.amazon.es/Pioneer-DJ-DM-50D-BT-escritorio-Bluetooth/dp/B0B252ZD5N/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=359QV8H26A08S&dib=eyJ2IjoiMSJ9.lxtXZ4bc71e83Ip-iZGoq5eCG17HipYbCJ2tJhVilrIWhGm5j3GpBxbfHs4_T8KjzHZkE7ILd51EGFpl7cd7LB0owsdT7DmWnq2PFRVUYA8P_ZgawK1jbxo7Gl5a2-r9.1OrFZPiwBSn6SnPmDf8UxDteftSfrA8n_JEcLmGGspk&dib_tag=se&keywords=pioneer+dm-50&nsdOptOutParam=true&qid=1733568425&s=musical-instruments&sprefix=pioneer+dm-50%2Cmi%2C72&sr=1-1"></Card>
                <Card 
                    imgUrl="https://vinesoftheyarravalley.com.au/wp-content/uploads/2020/06/Equipment-of-a-Wedding-DJ-1-1024x683.jpg"
                    cardTitle="DjSet Up Completo"
                    infoUrl="https://www.amazon.es/Numark-Starter-Kit-todo-uno/dp/B09SQ2M6LV/ref=sr_1_21?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2GQW7M6FR9IF6&dib=eyJ2IjoiMSJ9.DGPDQO0ndkKgATGNSN2orBfhVfvCVomCwnK9WAUQUWW_XoZorKnSXjA0BbuQjNygu0ogj8dAOg9f4Ddf1u5aGpPFN6qRBx-WkFR_N3dlSQ0MYruUpvg_UEjEKUlLEFLP2-HKgT5VcTn1QGjck4lzmtGT3EsWW_HWHIJF-qhels0UxPoxvKULxcvNS3D0J2yE0ZCnro9svATDpAelGQHWJDdqoMW4C1stJ-ZCv1vEHKXdcBoorY-NueScqbI04hQ5C1iyAjbDdDGwWuB6WC29FXZg8Xuxd6ocjO6pu_YUhB8.yOR3vykJmZXcsQfIGbLqF4Vujt0CEsR7WVpPz1S3F5c&dib_tag=se&keywords=set+up+dj+completo+pioneer&nsdOptOutParam=true&qid=1733568503&s=musical-instruments&sprefix=set+up+dj+completo+pioneer%2Cmi%2C76&sr=1-21"></Card>
            </div>
                );
}

export default GalleryCard;