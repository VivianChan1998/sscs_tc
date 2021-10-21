import React from 'react'


export default class Contact extends React.Component{
    render(){
        return(
            <div className='sub-wrapper'>
                <h1>Contact</h1>
                <p>
                    若您有任何疑問，歡迎留言與我們交流聯繫，謝謝
                    <br/>
                    Feel free to contact us if you have any question.
                </p>
                <p>
                    <b>IEEE SSCS Taipei Chapter</b>
                    <br/>
                    Tel: <em>+886-2-3366-3700</em>  ext: <em>243</em>
                    <br/>
                    E-mail: <em> thlin@ntu.edu.tw </em>

                    <br/>
                    <br/>
                    10617 台北市大安區羅斯福路四段一號電機二館 243室
                    <br/>
                    Rm 243, EE Building II, No.1, Sec. 4, Roosevelt Road, Taipei, Taiwan 10617
                </p>
                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%E5%8F%B0%E5%8C%97%E5%B8%82%E5%A4%A7%E5%AE%89%E5%8D%80%E7%BE%85%E6%96%AF%E7%A6%8F%E8%B7%AF%E5%9B%9B%E6%AE%B5%E4%B8%80%E8%99%9F%E9%9B%BB%E6%A9%9F%E4%BA%8C%E9%A4%A8%20243%E5%AE%A4&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                        <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/">
                        </a>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}