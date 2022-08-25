import {FaHtml5,FaCss3Alt,FaJsSquare,FaReact,FaGitAlt,FaFileDownload ,FaSass, FaBootstrap } from 'react-icons/fa'
import {SiTypescript} from 'react-icons/si';
import { DownloadButton, HomeContainer, ProjectList, TechList } from './Home.styles'

export function Home() {
    return (
        <HomeContainer>     
            <h1>Olá, eu sou o Dev Lima</h1>
            <p>
            Olá, me chamo Davi Lima, sou de Fortaleza, Ceará. Adoro computação e tudo
            relacionado à tecnologia. Desde meus 18 anos, que foi quando conheci a 
            programção no curso de engenharia civil, soube que aquilo era pra mim. 
            Desde então me dedico a isso: mudei de curso para Ciência da Computação,
            fiz cursos e bootcamps por fora e hoje atuo feliz nessa área que me desafia
            a cada dia.
            </p>
            <p> Fora isso, adoro viajar, pratico kung fu e qualquer tipo de música me balança.</p>

            <DownloadButton><a download='../../public/Currículo_Davi_Lima_ReactJs_2022_08.pdf' target={'_self'} href="../../public/Currículo_Davi_Lima_ReactJs_2022_08.pdf">Currículo <FaFileDownload size={18}/></a></DownloadButton>

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
                <a href="#">
                    <span>
                        <img src="https://raw.githubusercontent.com/davim5/Pokedex-React-Virtual/master/images/print_today.png" alt="Pokedex React" />
                    </span>
                    <div>
                        <h3>Pokedex React ↗️</h3>
                        <span>Pokedex feita com typescript e react usando a pokeapi</span>
                    </div>
                </a>
                <a href="#">
                    <span>
                        <img src="https://raw.githubusercontent.com/davim5/Pokedex-React-Virtual/master/images/print_today.png" alt="Pokedex React" />
                    </span>
                    <div>
                        <h3>Pokedex React ↗️</h3>
                        <span>Pokedex feita com typescript e react usando a pokeapi</span>
                    </div>
                </a>
            </ProjectList>
        </HomeContainer>
    )
}