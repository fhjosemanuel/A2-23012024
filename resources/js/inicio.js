
function returnTextPrincipiosValores(){
        return "<div class='info-section'>"
                +"<p class='h1-context'>LEALTAD</p><br>"
                +"Somos leales a los principios del FET-UAGro y a los compromisos que adquirimos como parte de esta comunidad, respetamos y defendemos nuestra autonomía, normatividad e identidad institucional.<br><br>"
                +"<p class='h1-context'>INIDAD</p><br>"
                +"Nuestras ideas, pensamientos y acciones están orientadas a promover el trabajo colaborativo y armonioso en nuestro entorno, a hacer sinergias para enfocar los recursos en pro de un proyecto común que es nuestra Universidad.<br><br>"
                +"<p class='h1-context'>RESPETO</p><br>"
                +"Nos ocupamos de que nuestras acciones tengan impacto positivo y signifi cativo en nuestra comunidad, valorando la importancia de cada individuo y forma de vida en nuestro entorno. Promovemos la tolerancia, la empatía, la solidaridad y la diversidad de pensamientos como forma de crecimiento personal y profesional.<br><br>"
                +"<p class='h1-context'>JUSTICIA</p><br>"
                +"Creemos que todos podemos contribuir al bien común y a la toma de decisiones; por ello, fomentamos la inclusión, la verdad, la equidad y el respeto a los derechos para garantizar el orden y la paz en nuestra comunidad.<br><br>"
                +"<p class='h1-context'>INTEGRIDAD</p><br>"
                +"Nos conducimos de manera honesta, honrada y respetuosa, priorizando el benefi cio colectivo sobre lo individual.<br><br>"
                +"<p class='h1-context'>COMPROMISO INSTITUCIONAL</p><br>"
                +"Reconocemos nuestra identidad política, pero somos conscientes de que, como parte de la comunidad UAGro, tenemos objetivos compartidos por los cuales trabajar, sin discriminación de género, afi nidad política o de cualquier otra índole, para hacer realidad el proyecto de Universidad pueblo con calidad e inclusión social.<br><br>"
        +"</div>"
}
function ShowPrincipiosValores(){
        var displayStartContext = document.getElementById("startContext");
        displayStartContext.innerHTML = returnTextPrincipiosValores();
}
function ShowPrincipiosValoresMovil(){
        var displayStartContext = document.getElementById("principiosValores");
        
        let menu = document.getElementsByClassName("card-link")[0];
        let circulo = document.getElementsByClassName("container-link")[0];
        
        if(menu.classList.contains("click")) {
                menu.classList.remove("click");
                displayStartContext.style.display = "none";
                circulo.style.backgroundColor = "#fff";
        }
        else{
                menu.classList.add("click");
                displayStartContext.style.display = "flex";
                circulo.style.backgroundColor = "#002C73";
        }
        displayStartContext.innerHTML = returnTextPrincipiosValores();
}

function returnTxtMisionVision(){
        return ""
        +"<div class='info-section'>"
                +"<p>El Grupo BIO, como parte del Frente Estatal por la Transformación de la UAGro (FET-UAGro), es una organización que realiza actividades académicas y políticas que impulsan la consolidación académica de nuestra institución, a la vez que promueve acciones para el bienestar de la comunidad universitaria.</p><br>"
                +"<p>Al 2028, el Grupo BIO es una organización académico – política con amplio reconocimiento en la comunidad universitaria, con miembros que realizan sus actividades con integridad y justicia social, contribuyendo de manera importante en la educación de excelencia de profesionistas en el estado de Guerrero.</p><br>"
        +"</div>";
}
function ShowMisionVision(){
        var displayStartContext = document.getElementById("startContext");
        displayStartContext.innerHTML = returnTxtMisionVision();
}
function ShowMisionVisionMovil(){
        var displayStartContext = document.getElementById("misionVision");

        let menu = document.getElementsByClassName("card-link")[1];
        let circulo = document.getElementsByClassName("container-link")[1];
        
        if(menu.classList.contains("click")) {
                menu.classList.remove("click");
                displayStartContext.style.display = "none";
                circulo.style.backgroundColor = "#fff";
        }
        else{
                menu.classList.add("click");
                displayStartContext.style.display = "flex";
                circulo.style.backgroundColor = "#002C73";
        }
        displayStartContext.innerHTML = returnTxtMisionVision();
}
function returnTxtPlanAcademico(){
        return ""+
        "<div class='info-section'>"
                +"<p>El plan académico se basa en los siguientes ejes:</p><br>"
                +"<p class='h1-context'>INFRAESTRUCTURA</p><br>"
                +"<ul>"
                        +"<li>Implementar un plan para la recuperación y el mantenimiento de los espacios prioritarios para el trabajoacadémico y administrativo que involucre a la comunidad FCQB.</li>"
                        +"<li>Adaptación de instalaciones para personas con capacidades diferentes.</li>"
                        +"<li>Transitar hacia el desarrollo de instalaciones e infraestructura ambientalmente amigables.</li>"
                +"</ul>"
                +"<br><p class='h1-context'>DOCENCIA</p><br>"
                +"<ul>"
                        +"<li>Impulsar la habilitación y capacitación del personal académico para fortalecer los perfi les en las áreas prioritarias identifi cadas en cada PE.</li>"
                        +"<li>Priorizar que las contrataciones futuras correspondan a los perfi les prioritarios que requiere cada PE.</li>"
                        +"<li>Re-acreditar los programas educativos de licenciatura.</li>"
                        +"<li>Implementar un programa integral de capacitación y bienestar.</li>"
                +"</ul>"
                +"<br><p class='h1-context'>FORMACIÓN INTEGRAL DEL ESTUDIANTE</p><br>"
                +"<ul>"
                        +"<li>Alinear el proceso de aprendizaje a la fi losofía de la nueva escuela mexicana.<br>• Implementar campañas de concientización para el respeto al ambiente.</li>"
                        +"<li>Impulsar un programa de empoderamiento y de mejora de la salud mental del estudiantado.</li>"
                        +"<li>Articular e implementar actividades culturales, deportivas y recreativas.</li>"
                +"</ul>"
                +"<br><p class='h1-context'>VINCULACIÓN</p><br>"
                +"<ul>"
                        +"<li>Formalizar acuerdos de colaboración con organizaciones sociales, productivas y gubernamentales afi nes a las áreas de énfasis de los PE.</li>"
                        +"<li>Promover la participación de la comunidad en eventos y programas de vinculación con los sectores de la sociedad.</li>"
                        +"<li>Incorporar tecnologías en el proceso de aprendizaje, como laboratorios virtuales y plataformas que permitan el desarrollo de los procesos académicos con visión global.</li>"
                +"</ul>"
                +"<br><p class='h1-context'>TECNOLOGÍAS DE LA INFORMACIÓN</p><br>"
                +"<ul>"
                        +"<li>Gestionar proyectos para mejorar la conectividad en todas las instalaciones de la FCQB y el acceso a los repositorios académicos y de investigación.</li>"
                        +"<li>Articular los recursos digitales internos y externos para la incorporación de las TIC en las actividades adjetivas y sustantivas.</li>"
                        +"<li>Implementar un sistema de documentación y seguimiento de la trayectoria escolar y del personal</li>"
                +"</ul>"
                +"<br><p class='h1-context'>INVESTIGACIÓN</p><br>"
                +"<ul>"
                        +"<li>Realizar un análisis de la pertinencia de las líneas de investigación y proponer una estrategia para su reorientación hacia las áreas prioritarias y de mayor incidencia social.</li>"
                        +"<li>Fomentar el desarrollo de proyectos directamente vinculados con los sectores de la sociedad.</li>"
                        +"<li>Promover que los procesos de generación de conocimiento y desarrollo de tecnologías se vinculen con los procesos de transferencia y apropiación social.</li>"
                +"</ul>"
                +"<br><p class='h1-context'>AMBIENTE LABORAL</p><br>"
                +"<p>Impulsar un programa formativo para el desarrollo de habilidades directivas y de gestión para el personal administrativo.</p>"
                +"<p>Diseñar un plan de gran visión para el desarrollo de la FCQB. Realizar un diagnóstico tal que permita diseñar acciones para la mejora del clima laboral y un sistema de calidad que asegure la salud y seguridad en el trabajo del personal académico, administrativo y de intendencia.</p>"
                +"<p>Impulsar un programa sistemático para el empoderamiento positivo que asegure una cultura de paz y la promoción de la no violencia entre toda la comunidad</p>"
        +"</div>";
}
function ShowPlanAcademico(){
        var displayStartContext = document.getElementById("startContext");
        displayStartContext.innerHTML = returnTxtPlanAcademico();
}
function ShowPlanAcademicoMovil(){
        var displayStartContext = document.getElementById("planAcademica");
        
        let menu = document.getElementsByClassName("card-link")[2];
        let circulo = document.getElementsByClassName("container-link")[2];
        
        if(menu.classList.contains("click")) {
                menu.classList.remove("click");
                displayStartContext.style.display = "none";
                circulo.style.backgroundColor = "#fff";
        }
        else{
                menu.classList.add("click");
                displayStartContext.style.display = "flex";
                circulo.style.backgroundColor = "#002C73";
        }
        displayStartContext.innerHTML = returnTxtPlanAcademico();
}
function returnTextPlanPolitico(){
        return ""
        +"<div class='info-section'>"
                +"<p>El plan político se basa en los siguientes ejes:</p><br>"
                +"<br><p class='h1-context'>COMUNICACIÓN</p><br>"
                +"<ul>"
                        +"<li>Infundir la identidad del grupo BIO a través del diseño y socialización de la imagen y la fi losofía del grupo entre nuestros integrantes.</li>"
                        +"<li>Posicionar al grupo en la comunidad universitaria a través de un plan de marketing digital con énfasis académico.</li>"
                        +"<li>Generar canales de comunicación interactivos e inclusivos para que todas las voces sean escuchadas y tengan incidencia en la toma de decisiones.</li>"
                        +"<li>Asegurar la transparencia y el derecho de acceso a la información mediante la documentación de las actividades y toma de decisiones al interior del grupo.</li>"
                        +"<li>Propiciar la confianza y defender la verdad como pilares fundamentales de la comunicación al interior del grupo.</li>"
                +"</ul>"
                +"<br><p class='h1-context'>DESAROLLO ACADÉMICO Y PROFESIONAL</p><br>"
                +"<ul>"
                        +"<li>Promover la superación y mejora continua en nuestra comunidad, enfocando mayoritariamente nuestras acciones en el ámbito académico e insitucional.</li>"
                        +"<li>Favorecer el desarrollo de nuestros integrantes, gestionando las condiciones adecuadas para su formación profesional.</li>"
                        +"<li>Impulsar el desarrollo de los programas educativos para lograr la excelencia académica. Para ello, es necesario asegurar la participación en puestos estratégicos para la toma de decisiones.</li>"
                +"</ul>"
                +"<br><p class='h1-context'>BIENESTAR</p><br>"
                +"<ul>"
                        +"<li>Fomentar la formación integral, con sentido humanista, de los diferentes actores de nuestra comunidad a través de programas de capacitación y empoderamiento, que incluyan la formación política y de gestión en nuestros integrantes.</li>"
                        +"<li>Favorecer la salud física y emocional de nuestra comunidad, así como el cuidado del medio ambiente a través de actividades culturales, deportivas, sociales, entre otras.</li>"
                        +"<li>Promover la mejora de las condiciones laborales, gestionando ante las autoridades correspondientes las prestaciones</li>"
                +"</ul>"
                +"<br><p class='h1-context'>BEQUIDAD Y JUSTICIA</p><br>"
                +"<ul>"
                        +"<li>Revalorar el papel de todos los miembros de nuestra comunidad.</li>"
                        +"<li>Promover el respeto a nuestra normatividad universitaria y a los derechos humanos, respaldando a nuestros integrantes y alzando la voz ante actos de injusticia y violencia de cualquier tipo.</li>"
                        +"<li>Justicia laboral en nuestra comunidad, anteponiendo los principios de equidad y los derechos contractuales</li>"
                +"</ul>"
        +"</div>";
}
function ShowPlanPolitico(){
        var displayStartContext = document.getElementById("startContext");
        displayStartContext.innerHTML = returnTextPlanPolitico();
}
function ShowPlanPoliticoMovil(){
        var displayStartContext = document.getElementById("planPolitico");
        
        let menu = document.getElementsByClassName("card-link")[3];
        let circulo = document.getElementsByClassName("container-link")[3];
        
        if(menu.classList.contains("click")) {
                menu.classList.remove("click");
                displayStartContext.style.display = "none";
                circulo.style.backgroundColor = "#fff";
        }
        else{
                menu.classList.add("click");
                displayStartContext.style.display = "flex";
                circulo.style.backgroundColor = "#002C73";
        }
        displayStartContext.innerHTML = returnTextPlanPolitico();
}