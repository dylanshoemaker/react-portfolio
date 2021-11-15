import React from 'react';

const Work = (props) => {

    return (
        <div id="work" class="step">
            <h2>Work</h2>
            <div class="aside">
                <div class="project-container">
                    <div class="game-stork">
                        <a href="https://github.com/ewalker518/game-go" ><img src={require("../../assets/images/game-go-image.png").default} alt={"Game Go"}/></a>
                        <div class="tag"><p1>Game Stork Group Project, Role: Scrum Master</p1><br></br>JavaScript / API's / HTML / CSS / Bootstrap / jQuery, / Node/Express Server </div>
                    </div> 
                    <div class="group">
                        <a href="https://github.com/dylanshoemaker/dnd-manager" ><img src="https://user-images.githubusercontent.com/84681402/134272627-85bf112c-0386-47e4-9f6d-e6fa16cb9e13.png" alt={"Dnd Manager"}/></a>
                        <div class="tag"><p1>DND Character Sheet Manager Group Project, Role: DevOps</p1><br></br>JavaScript / MySQL / Handlebars / Node.js</div>
                    </div>
                    <div class="horiseon">
                        <a href="https://github.com/dylanshoemaker/coffee-is-the-answer" ><img src={require("../../assets/images/coffee.jpg").default} alt={"Coffee"}/></a>
                        <div class="tag"><p1>Coffee is the Answer</p1><br></br>Node.js / MySQL2 / Sequelize / Express.js</div>
                    </div> 
                    <div class="jedkh">
                        <a href="https://github.com/dylanshoemaker/jedkh" ><img src={require("../../assets/images/jedkh2.PNG").default} alt={"Tech Blog"}/></a>
                        <div class="tag"><p1>The Tech Blog</p1><br></br>Node.js / MySQL2 / Sequelize / Express.js / Handlebars</div>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Work;