import { useEffect, useState } from 'react';
import {FaHtml5,FaCss3Alt,FaJsSquare,FaReact,FaGitAlt,FaFileDownload ,FaSass, FaBootstrap } from 'react-icons/fa'
import {SiTypescript} from 'react-icons/si';
import { DownloadButton, HomeContainer, ProjectList, TechList } from './Home.styles'

export function Home() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const toRotate = ["Davi Lima", "Dev Lima", "Dav Lima"];
    const [text, setText] = useState('');
    const [input , setInput] = useState('|');
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    // Time between deleting;
    const period = 2000; // 2 seconds

    const tick = () => {
        let index = loopNum % toRotate.length;
        let fullText = toRotate[index];
        let updatedText = isDeleting ? 
        fullText.substring(0, text.length - 1) :
        fullText.substring(0, text.length + 1)

        setText(updatedText);

        if(isDeleting) {
            setDelta(state => state/2);
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    const blink = () => {
        let newInput = input === "" ? '|' : "";
        setInput(newInput);
    }

    // Delete and rewrite text
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => {clearInterval(ticker)}
    },[text])

    // Blink the "|" character
    useEffect(() => {
        let blinker = setInterval(() => {
            blink();
        },500)

        return () => {clearInterval(blinker)}
    },[input])

    return (
        <HomeContainer>     
            <h1>Olá, eu sou o {text}{input}</h1>
            <p>
            Sou de Fortaleza, Ceará. Adoro computação e tudo
            relacionado à tecnologia. Desde meus 18 anos, que foi quando conheci a 
            programção no curso de engenharia civil, soube que aquilo era pra mim. 
            Desde então me dedico a isso: mudei de curso para Ciência da Computação,
            fiz cursos e bootcamps por fora e hoje atuo feliz nessa área que me desafia
            a cada dia.
            </p>
            <p>
            Já estudei e trabalhei em backend com NodeJs, mas hoje meu maior foco é no front 
            em que venho utilizando React e TypeScript. Também pretendo voltar a usar 
            React Native e me enveredar pelas áreas do "mundo mobile".
            </p>
            <p>
            Fora isso, adoro viajar, pratico Kung Fu, gosto muito de rock, mas a maioria dos estilos
            de música me agradam.
            </p>

            <DownloadButton><a download='https://github.com/davim5/portifolio-react/raw/master/public/Curr%C3%ADculo_Davi_Lima_ReactJs_2022_08.pdf' target={'_self'} href="../../public/Currículo_Davi_Lima_ReactJs_2022_08.pdf">Currículo <FaFileDownload size={18}/></a></DownloadButton>

            <h2>Tecnologias</h2>
            <TechList>
                <div>
                    <FaHtml5 color='#F74D05' size={56}/>
                    <span>HTML 5 </span>
                </div>
                <div>
                    <FaCss3Alt color='#2862E9' size={56}/>
                    <span>CSS3 </span>
                </div>
                <div>
                    <FaJsSquare color='#EFD81D' size={56}/>
                    <span>JavaScript</span>
                </div>
                <div>
                    <FaReact color='#5ED3F3' size={56}/>
                    <span>React</span>
                </div>
                <div>
                    <FaGitAlt color='#E44C30' size={56}/>
                    <span>Git</span>
                </div>
                <div>
                    <SiTypescript color='#2F74C0' size={56}/>
                    <span>TypeScript</span>
                </div>
                <div>
                    <FaSass color='#C76494' size={56}/>
                    <span>Sass</span>
                </div>
                <div>
                    <FaBootstrap color='#8311F6' size={56}/>
                    <span>Bootstrap</span>
                </div>
            </TechList>
            <h2>Projetos</h2>
            <ProjectList>
                <a  href="https://github.com/davim5/Pokedex-React-Virtual">
                    <span>
                        <img src="https://raw.githubusercontent.com/davim5/Pokedex-React-Virtual/master/images/print_today.png" alt="Pokedex React" />
                    </span>
                    <div>
                        <h3>Pokedex React ↗️</h3>
                        <span>Pokedex feita com typescript e react usando a pokeapi</span>
                    </div>
                </a>
                <a href="https://github.com/davim5/dtmoney-React">
                    <span>
                        <img src="https://github.com/davim5/portifolio-react/blob/master/src/assets/print_dtmoney.png?raw=true" alt="Blue print image" />
                    </span>
                    <div>
                        <h3>Dt Money ↗️</h3>
                        <span>Simples gerenciador de transações.</span>
                    </div>
                </a>
                <a href="https://random-heatmap-generator.vercel.app">
                    <span>
                        <img src="https://github.com/davim5/Random-Heatmap-Generator/blob/master/images/print_today.png?raw=true" alt="Blue print image" />
                    </span>
                    <div>
                        <h3>Heatmap Generator ↗️</h3>
                        <span>Gerador de mapas de calor aleatórios.</span>
                    </div>
                </a>
                <a href="#">
                    <span>
                        <img src="https://cdn.dribbble.com/users/31260/screenshots/465048/website.jpg" alt="Blue print image" />
                    </span>
                    <div>
                        <h3>Em andamento 🛑</h3>
                        <span>Projeto que ainda será agregado aqui</span>
                    </div>
                </a>
            </ProjectList>
        </HomeContainer>
    )
}