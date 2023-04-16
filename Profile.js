import React from 'react';
import Profiles from './styling/Profiles.css';
export default class Profile extends React.Component {
    render() {
      return (

        <div> 
        <div style = {{background: 'whitesmoke'}}> 
          <img style = { {width: "160px", height: "160px", borderRadius: "80px", marginLeft: "28%", marginTop: "1%"}}
          src = "https://media.istockphoto.com/id/1353173739/photo/green-textured-cardboard-background.jpg?b=1&s=170667a&w=0&k=20&c=lSfku0dZuNLZl6x8lU-QCDEL5_JzUT3VK9aji82IzBs="/>
          <h2 style = {{marginLeft: "44%", marginTop: "-29%", color: 'white'}}> 20 </h2>
          <h2 style = {{ position: 'abstract', marginLeft: "40%", marginTop: "-6%", color: 'white'}}> MILES </h2> 

          <h4 style = {{position: 'absolute', marginTop: "50px",marginLeft: "15px" }}> Sponsored by:  </h4>
          <img style = {{ position: 'absolute' , width: "70px", height: "70px", borderRadius: "80px", marginLeft: "80%", marginTop: "20%"}} src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzFU_bsqBsxI914XoZOxbHYt7fqjx5BTDcfb973TeSHw&s"/> 
          <img style = {{ position: 'absolute' , width: "70px", height: "70px", borderRadius: "80px", marginLeft: "65%", marginTop: "20%"}} src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWHWO6FL0OrQFWIkJPR_RtNrat611byKloK49dPcl&s"/> 
        </div>


          <div style = {{background: 'white', marginTop: "64%"}}>
            <h4 style = {{marginLeft: "15px"}}> Today: </h4>
          </div>
          <div style = {{background: '#59A96A', marginTop: "0%", width: "100%", height: "70px"}}>
            <h4 style = {{marginLeft: "30px", paddingTop:"6%"}}> Donations Raised : $11.40  </h4>
          </div>
          <div style = {{background: '#89C69A', marginTop: "-4%", width: "100%", height: "70px"}}>
            <h4 style = {{marginLeft: "30px", paddingTop:"6%"}}> Calories : 200 </h4>
          </div>
          <div style = {{background: '#BCEECA', marginTop: "-4%", width: "100%", height: "70px"}}>
            <h4 style = {{marginLeft: "30px", paddingTop:"6%"}}> Steps : 3023 </h4>
          </div>





          <div style = {{background: 'white', marginTop: "8%", width: "100%", height: "70px"}}>
            <div  style = {{background: 'white', width: "30%", height: "70px" }}> 
            <img style = { {width: "40px", height: "40px", borderRadius: "80px", marginLeft: "40px"}}
          src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACJCAMAAAAv+uv7AAAAaVBMVEX///8AAADv7+/s7Oz29vb6+vqvr687Ozvf39/j4+Pn5+epqanNzc0xMTF/f3+hoaFNTU3T09NYWFhzc3OQkJC6uroqKipSUlIlJSVeXl4ZGRmYmJjBwcFnZ2cdHR0UFBSHh4dCQkILCwss+kA5AAAE/UlEQVR4nO1c2baiMBAUZHNDQVxwBf//I8fl6mDSlcDt0M45Yz2HOyXpVFd3mhkMvvjii54RBv4VwadpDEbRcuZdUVer4Sd5hOmdxgNx4X+MyGrtvSMKP0Mk8jSkH6Ey14l43uIDoZtRRDyvEicyjGkm3kqayR4Q8WJhImNERPylVJjJUvT8jGeYiZdJMiGkpPFSBImERxMTT5DJ0EjEi+SYHMxMUjkm5s3x4pEYE6SvT4idnuRkYSIWKCsLEblAgTnniY0QkXBpYzITYgINwQsnISYjGxExJsCtNbBFj/pJUdZxvFi6qUmM6e8O4JZG80YxkE75TAze5AcL6rFwvn1bdCnY7tui9VcciafGubZsw92ijZVJRRChniqZVWNtZaKrfai/kTsVntO0yomnB+MErJz0y2Sn5eLxGSzdsgxEbWNSj9VHUrh2z2GysDHRLPUUrz1zzk9pY1J04c7xMtZUfFAeMPoZUgVborAxUdYHRincMrbHlndqZb0lYzLqaFsuVjXCspuM02PzJ4my3rKcUdFDmXqgVFKs4Qjfsfh98rG4R/Vt2/z3VtPB1jCfBU/Vb+uhZwi+0SqpJ8ens3ADalx1ANn/fEKVtcTU9CGf6ACToKxVocp2Nibz3zMx/XFNHeyVAKd2xS/8rFkT2yGmXW9b4Gys1xd2JjmDCQ5Z/ffZmainrQuw3mvWpAUTTlfbh4GiJ9Z+mWBfqve1+t0drCi67bGfYo5rGyRb8FcJJubMfUXJYTJAyURnYld7XlcOeVmdydBalLBKHni/Q9hjqyvgNVJC8M4JJrj++wHDFdwAnBjBpEfPdge4RCCYWK4bNN/bFT4diAQT38JETxAdoW5/XFbzaEVVDBczE14LZfBU8ctpHefpZDoc4sEPswHXHU1nlMtiHk1bGHPzhYODznrQtnZLjEw4PqkrzCrLDpMuMNZHTF3rBlOgzEQHeUaGcyx4j3qD4d5QeB4C+aprydhPmIT+eJRRQoXNEs+vUQiS1WSfLrb0bSRmwqjO33Eb8MuiKq9nr1Cgbt7UabMXdm4GrJJokm70ECAsGIxYdh5+ANSkRBMC9RbODm7gbgA3JXovcYgKDVfxCqQz1twgLL5czR+gOlM7x8g/nh0Rgdle+6XowotX6DQQgn9AUxTg7mfu9BUw0SamgCtwOOOFmCiOMgC1l8OU03YIc3yYEJ05VrNCATLtlHKGWVHGbz7FkardgepM5H7Gh/nxRSZ3OdOLdOKIXX/oJ8VmdqPjdKoKaWdu8ab+9d2wmmsaULtoYb9kDNwaaXTR04KJawDJsu1ODwDNUMkB2R8ENBPhGuYOuhnaLHWrU5WNBCaraUVpWKV762m23Pc+HUqenqYreFG95FHSayATbumtSfTWjN1UUY8zvFPVLZ+axZQW0rs6zYY9hU327g3Kt4ggC5HzcdLPFy1+8Srx1uX0/feCi4ZTXyLsT4oqrfbzgxqS2tY9X1yfX/mQe48MTNUjERIhqsxFu3w3oILo4qxX0RboPkW2y3cD6sO69WstMEVtE/FcDa9y/52P0qTDBH4gIP71YoAC1lmzoi18VDaLqwliEouriV/TTOSdfwBmiEQ/F3yAnj0QF9gBUjbxPHxFQAUKY/KTAaphK36EHzho9wuMyUIeMuW7kE99vH/DNP9rIXOXTb5fIImqxe5agVTk+IMwgn/if7744ov/Cn8AlK83ep2KRX8AAAAASUVORK5CYII="/>
             </div>
            <div  style = {{ position: 'abstract', background: 'white', width: "30%", height: "70px", marginLeft: "34%", marginTop: "-18%" }}> 
            <img style = { {width: "40px", height: "40px", borderRadius: "10px", marginLeft: "30px"}}
          src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYSzzyjyD9nxf3PF-tZMkYuXyRC0z6OuZkdxxE-1WqXw&sata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACJCAMAAAAv+uv7AAAAaVBMVEX///8AAADv7+/s7Oz29vb6+vqvr687Ozvf39/j4+Pn5+epqanNzc0xMTF/f3+hoaFNTU3T09NYWFhzc3OQkJC6uroqKipSUlIlJSVeXl4ZGRmYmJjBwcFnZ2cdHR0UFBSHh4dCQkILCwss+kA5AAAE/UlEQVR4nO1c2baiMBAUZHNDQVxwBf//I8fl6mDSlcDt0M45Yz2HOyXpVFd3mhkMvvjii54RBv4VwadpDEbRcuZdUVer4Sd5hOmdxgNx4X+MyGrtvSMKP0Mk8jSkH6Ey14l43uIDoZtRRDyvEicyjGkm3kqayR4Q8WJhImNERPylVJjJUvT8jGeYiZdJMiGkpPFSBImERxMTT5DJ0EjEi+SYHMxMUjkm5s3x4pEYE6SvT4idnuRkYSIWKCsLEblAgTnniY0QkXBpYzITYgINwQsnISYjGxExJsCtNbBFj/pJUdZxvFi6qUmM6e8O4JZG80YxkE75TAze5AcL6rFwvn1bdCnY7tui9VcciafGubZsw92ijZVJRRChniqZVWNtZaKrfai/kTsVntO0yomnB+MErJz0y2Sn5eLxGSzdsgxEbWNSj9VHUrh2z2GysDHRLPUUrz1zzk9pY1J04c7xMtZUfFAeMPoZUgVborAxUdYHRincMrbHlndqZb0lYzLqaFsuVjXCspuM02PzJ4my3rKcUdFDmXqgVFKs4Qjfsfh98rG4R/Vt2/z3VtPB1jCfBU/Vb+uhZwi+0SqpJ8ens3ADalx1ANn/fEKVtcTU9CGf6ACToKxVocp2Nibz3zMx/XFNHeyVAKd2xS/8rFkT2yGmXW9b4Gys1xd2JjmDCQ5Z/ffZmainrQuw3mvWpAUTTlfbh4GiJ9Z+mWBfqve1+t0drCi67bGfYo5rGyRb8FcJJubMfUXJYTJAyURnYld7XlcOeVmdydBalLBKHni/Q9hjqyvgNVJC8M4JJrj++wHDFdwAnBjBpEfPdge4RCCYWK4bNN/bFT4diAQT38JETxAdoW5/XFbzaEVVDBczE14LZfBU8ctpHefpZDoc4sEPswHXHU1nlMtiHk1bGHPzhYODznrQtnZLjEw4PqkrzCrLDpMuMNZHTF3rBlOgzEQHeUaGcyx4j3qD4d5QeB4C+aprydhPmIT+eJRRQoXNEs+vUQiS1WSfLrb0bSRmwqjO33Eb8MuiKq9nr1Cgbt7UabMXdm4GrJJokm70ECAsGIxYdh5+ANSkRBMC9RbODm7gbgA3JXovcYgKDVfxCqQz1twgLL5czR+gOlM7x8g/nh0Rgdle+6XowotX6DQQgn9AUxTg7mfu9BUw0SamgCtwOOOFmCiOMgC1l8OU03YIc3yYEJ05VrNCATLtlHKGWVHGbz7FkardgepM5H7Gh/nxRSZ3OdOLdOKIXX/oJ8VmdqPjdKoKaWdu8ab+9d2wmmsaULtoYb9kDNwaaXTR04KJawDJsu1ODwDNUMkB2R8ENBPhGuYOuhnaLHWrU5WNBCaraUVpWKV762m23Pc+HUqenqYreFG95FHSayATbumtSfTWjN1UUY8zvFPVLZ+axZQW0rs6zYY9hU327g3Kt4ggC5HzcdLPFy1+8Srx1uX0/feCi4ZTXyLsT4oqrfbzgxqS2tY9X1yfX/mQe48MTNUjERIhqsxFu3w3oILo4qxX0RboPkW2y3cD6sO69WstMEVtE/FcDa9y/52P0qTDBH4gIP71YoAC1lmzoi18VDaLqwliEouriV/TTOSdfwBmiEQ/F3yAnj0QF9gBUjbxPHxFQAUKY/KTAaphK36EHzho9wuMyUIeMuW7kE99vH/DNP9rIXOXTb5fIImqxe5agVTk+IMwgn/if7744ov/Cn8AlK83ep2KRX8AAAAASUVORK5CYII="/>
            </div>
            <div  style = {{ position: 'abstract', background: 'white', width: "30%", height: "70px", marginLeft: "68%", marginTop: "-18%" }}> 
            <img style = { {width: "40px", height: "40px", borderRadius: "10px", marginLeft: "30px"}}
          src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgOfgjZmIV5tQh_tD7ROPzK--kQhFyqo-tR_cz65aUQA&sata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACJCAMAAAAv+uv7AAAAaVBMVEX///8AAADv7+/s7Oz29vb6+vqvr687Ozvf39/j4+Pn5+epqanNzc0xMTF/f3+hoaFNTU3T09NYWFhzc3OQkJC6uroqKipSUlIlJSVeXl4ZGRmYmJjBwcFnZ2cdHR0UFBSHh4dCQkILCwss+kA5AAAE/UlEQVR4nO1c2baiMBAUZHNDQVxwBf//I8fl6mDSlcDt0M45Yz2HOyXpVFd3mhkMvvjii54RBv4VwadpDEbRcuZdUVer4Sd5hOmdxgNx4X+MyGrtvSMKP0Mk8jSkH6Ey14l43uIDoZtRRDyvEicyjGkm3kqayR4Q8WJhImNERPylVJjJUvT8jGeYiZdJMiGkpPFSBImERxMTT5DJ0EjEi+SYHMxMUjkm5s3x4pEYE6SvT4idnuRkYSIWKCsLEblAgTnniY0QkXBpYzITYgINwQsnISYjGxExJsCtNbBFj/pJUdZxvFi6qUmM6e8O4JZG80YxkE75TAze5AcL6rFwvn1bdCnY7tui9VcciafGubZsw92ijZVJRRChniqZVWNtZaKrfai/kTsVntO0yomnB+MErJz0y2Sn5eLxGSzdsgxEbWNSj9VHUrh2z2GysDHRLPUUrz1zzk9pY1J04c7xMtZUfFAeMPoZUgVborAxUdYHRincMrbHlndqZb0lYzLqaFsuVjXCspuM02PzJ4my3rKcUdFDmXqgVFKs4Qjfsfh98rG4R/Vt2/z3VtPB1jCfBU/Vb+uhZwi+0SqpJ8ens3ADalx1ANn/fEKVtcTU9CGf6ACToKxVocp2Nibz3zMx/XFNHeyVAKd2xS/8rFkT2yGmXW9b4Gys1xd2JjmDCQ5Z/ffZmainrQuw3mvWpAUTTlfbh4GiJ9Z+mWBfqve1+t0drCi67bGfYo5rGyRb8FcJJubMfUXJYTJAyURnYld7XlcOeVmdydBalLBKHni/Q9hjqyvgNVJC8M4JJrj++wHDFdwAnBjBpEfPdge4RCCYWK4bNN/bFT4diAQT38JETxAdoW5/XFbzaEVVDBczE14LZfBU8ctpHefpZDoc4sEPswHXHU1nlMtiHk1bGHPzhYODznrQtnZLjEw4PqkrzCrLDpMuMNZHTF3rBlOgzEQHeUaGcyx4j3qD4d5QeB4C+aprydhPmIT+eJRRQoXNEs+vUQiS1WSfLrb0bSRmwqjO33Eb8MuiKq9nr1Cgbt7UabMXdm4GrJJokm70ECAsGIxYdh5+ANSkRBMC9RbODm7gbgA3JXovcYgKDVfxCqQz1twgLL5czR+gOlM7x8g/nh0Rgdle+6XowotX6DQQgn9AUxTg7mfu9BUw0SamgCtwOOOFmCiOMgC1l8OU03YIc3yYEJ05VrNCATLtlHKGWVHGbz7FkardgepM5H7Gh/nxRSZ3OdOLdOKIXX/oJ8VmdqPjdKoKaWdu8ab+9d2wmmsaULtoYb9kDNwaaXTR04KJawDJsu1ODwDNUMkB2R8ENBPhGuYOuhnaLHWrU5WNBCaraUVpWKV762m23Pc+HUqenqYreFG95FHSayATbumtSfTWjN1UUY8zvFPVLZ+axZQW0rs6zYY9hU327g3Kt4ggC5HzcdLPFy1+8Srx1uX0/feCi4ZTXyLsT4oqrfbzgxqS2tY9X1yfX/mQe48MTNUjERIhqsxFu3w3oILo4qxX0RboPkW2y3cD6sO69WstMEVtE/FcDa9y/52P0qTDBH4gIP71YoAC1lmzoi18VDaLqwliEouriV/TTOSdfwBmiEQ/F3yAnj0QF9gBUjbxPHxFQAUKY/KTAaphK36EHzho9wuMyUIeMuW7kE99vH/DNP9rIXOXTb5fIImqxe5agVTk+IMwgn/if7744ov/Cn8AlK83ep2KRX8AAAAASUVORK5CYII="/>
           </div>
          </div>


      );
    }
  }
