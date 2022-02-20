import React from 'react';
import VMC from '../pages/VMC/VMC';

function About(){
    return(
    <div>
      <section className = "py-4 bg-info">
        <div className="container">
            <div className = "row">
                <div className = "col-md-4 my-auto">
                  <h4>About Us</h4>
                </div>
                <div className = "col-md-8 my-auto">
                    <h3 className = "float-end"> Home / About Us</h3>
                    
                </div>
            </div>
        </div>
      </section>


        <section className = "section" style = {{marginTop:"10px",}}>
          <div className="container ">
              <h5 className = "main-heading"> Our Company</h5>
              <div className = "underline"></div>

              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
          </div>
        </section>


        <VMC/>

      
    </div>
    );
}   

export default About;