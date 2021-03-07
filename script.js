$( document ).ready(function() {
    setTimeout(function(){
        console.log( "ready!" );
       // $('#header-img').css("filter","blur(1.6px)");
        $('#main-header').css("top","250px");
        $('#main-header').css("transition","all 1.2s");
    }, 1200);
});

$(".regular-btn").click(function(){
    $(".landing-page").css("filter","blur(12px)");
    var custom = $(this).data("custom");
    if(custom == "hats"){
        console.log(custom);
        $("#pop-grid").prepend('<img id="pop-photo" src="g0.jpg">');        
        $("#pop-content").prepend('<p class="pop-p">On the other hand, during the workshop I have learned the core of future project- connecting data sets API. After the paper prototype has formed, to demonstrate to others and use Gibbs reflective cycle in order to get other side of view and improve the idea. At this point, my idea is to create an AR application to see how tree grows with environmental purposed. With the presentation in progress, and viewing all others poster, group has eventually been formed.</p>');
        $("#pop-content").prepend('<p class="pop-p">Design Exploration- The whole designing exploration had been through a few different stages with different methods with various types of results. Brainstorming ideas from Queensland government open data portal, at this point I had came up with four ideas based on the data portal. The next progress- six thinking hats, the process has been sharing on ideas to classmates and discuss on the favorite idea of the table and criticize, demonstrate in different perspective to shape on each opinion.</p>');
        $("#pop-content").prepend('<h1 id="pop-title">6 hats</h1>');
    } else if(custom == "poster"){
        console.log(custom);
        $("#pop-grid").prepend('<img id="pop-photo" src="g1.jpg">');        
        $("#pop-content").prepend('<p class="pop-p">My part has been mainly focusing on fairly distributing the tasks, consulting each individual of us with the best suitable task of choice to each for the most efficient result. On the other hand, helping to consult the design of the digital prototype and responsible for designing and the details of the reports. From my own designated choose of project to a group selected agreed project, along the way suggested feature as social and posting feed criteria added to the main project. In a group, the main thing is teamwork, each teammate has been pleasant and clear with their ability to be more efficient on task distributing process. Improvement could still be initialize in time management area, difficulties on the time measurement due to many subject workload occurred in other courses.</p>');
        $("#pop-content").prepend('<p class="pop-p">Part A- Design proposal- Through a few group meeting the tasks has been distributed evenly and the project details including implementation method to core features- Animal Go project officially started. Discussions on the minimal deliverables to the maximum deliverables decisions has been challenging along with the core value to minimum deliverable product. Along the way, with implementation technical issues and timeframe challenging, AR filed into the maximum deliverable product, Part A has also included tasks detail within the timeframe, and information of chosen method.</p>');
        $("#pop-content").prepend('<h1 id="pop-title">Table of poster</h1>');
    } else if(custom == "progress"){
        console.log(custom);
        $("#pop-grid").prepend('<img id="pop-photo" src="g2.jpg">');        
        $("#pop-content").prepend('<p class="pop-p">Along the week, with six hat methods, Gibbs reflective cycle, each to reflect and view others opinion in different ways to seek for improvements. Connecting APIs workshop has been very amazing to learn, it was indeed impressive when the result has shown successfully, to imagine how many things could be implemented in future use any other places with other resources. During the sessions, in the contact session I have shape the idea a lot with tutor’s option adding up with classmates perspective from the exercise method. Another week, we have viewed all posters organized by categories and to work on the idea or add more features. One poster each within everyone’s idea to improve the subject with an idea to stand out from other existing website.</p>');
        $("#pop-content").prepend('<p class="pop-p">Journal- Since week one with all the welcoming from tutors with a full introduction about our subject criteria plus workshop in Adobe, I have learned photoshop and found it very resourceful. The following weeks has been with idea generation with many types of method with tutors’ help to keep us in the right direction. Browsing the Queensland open data portal to generate idea based on Queensland’s dataset in order to improve or offer uniqueness idea has been very fruitful.</p>');
        $("#pop-content").prepend('<h1 id="pop-title">Progress</h1>');
    } else if(custom == "prototype"){
        console.log(custom);
        $("#pop-grid").prepend('<img id="pop-photo" src="g3.jpg">');        
        $("#pop-content").prepend('<p class="pop-p"> Group presentation on stage was a way to get feed back from the audience and tutor, to decide main focusing criteria. Along with demo with the next presentation, feedback on success criteria to focus on along with more details oriented interaction plan to get a clear view on the site operation. Final project with promised deliverable product, we have prepared a pitch for the trade show. Although time consuming, preparation could have been improved after watching how other group prepares, we have various candy choice with a nice smile of each of us awaiting and standing along the table to introduce out site.</p>');
        $("#pop-content").prepend('<p class="pop-p">Paper prototyping to check on if the idea is in a correct direction with its uniqueness features, feedback from presentation showing my lack of skills of presenting in front of audience, in which is something I haven’t been able to overcome since the past. However, I believe with more practice and confidence I will improve eventually one day in the near future, Officially formed group and proposing the main idea to the tutor in order to add features or fix other parts for uniqueness, completeness to stand out from similar sites.</p>');
        $("#pop-content").prepend('<h1 id="pop-title">Digital prototype</h1>');
    } else if(custom == "interaction"){
        console.log(custom);
        $("#pop-grid").prepend('<img id="pop-photo" src="g4.jpg">');        
        $("#pop-content").prepend('<p class="pop-p" style="text-indent: 0px;"> Login/ Sign in/ Register an account<br>Map location navigation<br>Animal location in QLD<br>Zoom in/ out click on icon<br>Key word feature search of locations<br>Collectables animal saved in album<br>Album display page shows animal information<br>Add/ delete friends<br>Send/ cancel friends request<br>Share/ comment or photos in feed<br>Edit profile<br>3D animal show when zoom in</p>');
        $("#pop-content").prepend('<h1 id="pop-title">Interaction map</h1>');
    } else if(custom == "animal"){
        console.log(custom);
        $("#pop-grid").prepend('<img id="pop-photo" src="g5.jpg">');        
        $("#pop-content").prepend('<p class="pop-p">With the time frame issue, AR has been off the table, inter of AR 3D animal objects has been decided to be implemented in the project. In group work wise, some team mate has finish on time the promised task flow, but as expected some couldn’t deliver on time. However, to overcome it as a team leader has put in extra effort to balance out and finish the demo just in time. Improvement criteria, would be focusing on task distribution, and unexpected technical difficulties. Although with a minor problem occurred, the team harmony wasn’t affected instead teamwork spirit has went up to solve the problem.</p>');
        $("#pop-content").prepend('<p class="pop-p">Part B- DEMO- the second part of the project, at this point of the project, the core value has been implemented and running well along with connecting the API and map. During the presentation, show case to tutor with the process and difficulties that occurred to seek for suggestion in order to improve. Success criteria and interaction plan design has been critical, along with essential feedback from selected users has help to improve on the project. At part B, my contribution mainly has been on making interaction plan and adjust on the task distribution consider with the time frame.</p>');
        $("#pop-content").prepend('<h1 id="pop-title">Animal go</h1>');
    } else if(custom == "map"){
        console.log(custom);
        $("#pop-grid").prepend('<img id="pop-photo" src="g6.jpg">');        
        $("#pop-content").prepend('<p class="pop-p"> During the semester, the one core value learned in this course is connecting dataset API and map, to successfully implementing the dataset or connecting the map has meet its challenge. However, I see this as a long team beneficial knowledge, now I have more opportunities on creating an amazing site or project and knowing how building a site work internally with front end design. Interaction design plan is also important, map API implementation with design the fluency of zoom in each animal location shown. Provide user satisfaction and target audience experience is a few important point of engaging interaction with the users. </p>');
        $("#pop-content").prepend('<h1 id="pop-title">Map</h1>');
    } else if(custom == "party"){
        console.log(custom);
        $("#pop-grid").prepend('<img id="pop-photo" src="g7.jpg">');        
        $("#pop-content").prepend('<p class="pop-p" style="text-indent: 0px;"> Bootstrap - Open source of front-end source. <br> Foursquare - Type of networking process, including login and messages <br> Mapbox - Open source of designed map <br> Atlas of living Australia - Connects animal pictures with information <br> Font awesome - Provide various fonts <br> Google fonts - Another fonts provided</p>');
        $("#pop-content").prepend('<p class="pop-p">'+"Before this given opportunity of working the Animal GO project with team Alpaca1,  I haven't experience the opportunity of working in group project of developing a site application together, I have learned the importance of group work and task distribution with time frame. As well as the task distribution details of knowing each advantage in order to get into a clearer distribution according to one’s ability. On the other hand, so many third party framework freelancing help in order to perfect the project. Always learned more than expected along the way of experience.</p>");
        $("#pop-content").prepend('<h1 id="pop-title">Third party</h1>');
    } else if(custom == "3d"){
        console.log(custom);
        $("#pop-grid").prepend('<img id="pop-photo" src="g8.jpg">');        
        $("#pop-content").prepend('<p class="pop-p"> With limited timeframe, AR wasn’t achieved, instead of AR few 3D animal object was implemented in the map along with the animal locations. With the count of 12,000 animals implemented with 3 datasets, as zooming in click on the icon, the 3D object will be displayed as designed. Afterwards catch option shown, animal picture collectable and able to be found in album along with introduction about the animal. Along the way, searching to make 3D object, I have come through many amazing application including Maya and unity. However, with time and technical difficulties it has been categorized into the maximum deliverable product, the near coming future along with new opportunities I would like to try and work with some of those amazing application site since I have only get a scratch of understand this period of time.</p>');
        $("#pop-content").prepend('<h1 id="pop-title">3D Models</h1>');
    } else if(custom == "roo"){
        console.log(custom);
        $("#pop-grid").prepend('<img id="pop-photo" src="g9.jpg">');        
        $("#pop-content").prepend('<p class="pop-p">Inspire of PokemonGo, as animal location showed and zoom in to the 3D object animal display, a catch button would be available for user to interact. From the beginning of the semester, my first idea of tree augmented reality wasn’t favored by other classmates, but ever since I have been interested in the criteria. I hope with the next opportunity with more time and experience I or with my future team will be able t experience and implemented the AR features to increase user experience.</p>');
        $("#pop-content").prepend('<h1 id="pop-title">More 3D models</h1>');
    } else if(custom == "catch"){
        console.log(custom);
        $("#pop-grid").prepend('<img id="pop-photo" src="g10.jpg">');        
        $("#pop-content").prepend('<p class="pop-p"> Group presentation on stage was a way to get feed back from the audience and tutor, to decide main focusing criteria. Along with demo with the next presentation, feedback on success criteria to focus on along with more details oriented interaction plan to get a clear view on the site operation. Final project with promised deliverable product, we have prepared a pitch for the trade show. Although time consuming, preparation could have been improved after watching how other group prepares, we have various candy choice with a nice smile of each of us awaiting and standing along the table to introduce out site.</p>');
        $("#pop-content").prepend('<p class="pop-p">Paper prototyping to check on if the idea is in a correct direction with its uniqueness features, feedback from presentation showing my lack of skills of presenting in front of audience, in which is something I haven’t been able to overcome since the past. However, I believe with more practice and confidence I will improve eventually one day in the near future, Officially formed group and proposing the main idea to the tutor in order to add features or fix other parts for uniqueness, completeness to stand out from similar sites.</p>');
        $("#pop-content").prepend('<h1 id="pop-title">Catching animals</h1>');
    } else if(custom == "places"){
        console.log(custom);
        $("#pop-grid").prepend('<img id="pop-photo" src="g11.jpg">');        
        $("#pop-content").prepend('<p class="pop-p">In the future design courses, this point of view can be improved by designing a more interactive way to introduce and let the user experience the site instead of just naively hoping someone would stop. People are generally visualized group, to attract users to stop by and explore the site could have design a more fun and interactive activity for the targeted audience. At the beginning of the course, I have no confidence either with my technical skills or my designing skills, but with all the improvement and constant practice through the course, I feel I have improve and learned a lot on both criteria. At last, my report skills has certainly improved plenty as I learned along the way reports can be easier to read and well designed.</p>');
        $("#pop-content").prepend('<h1 id="pop-title">Places</h1>');
    }

    $("#pop-up").fadeIn();
});

$("#close-pop").click(function() {
    $(".landing-page").css("filter","blur(0px)");
    $("#pop-up").fadeOut();
    $( "#pop-photo" ).remove();
    $( ".pop-p" ).remove();
    $( "#pop-title" ).remove();
});