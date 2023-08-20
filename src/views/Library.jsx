import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGenres } from '../store/books/bookSlice';
import { Link } from 'react-router-dom';
import PurpleEye from '../assets/PurpleEye.png';
import RedMark from '../assets/RedMark.png';

const Library = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div className='bg-white h-screen flex flex-col items-center justify-center '>
      <img src={PurpleEye} className='h-12 mt-10' />
      <h1 className='font-bold font-roboto text-5xl text-bluebook'>
        EXPLORÁ LA LIBRERÍA
      </h1>
      <div className='h-[800px] w-[900px]'>
        <div className='grid h-full grid-cols-12 grid-rows-6 relative'>
          {/* Esto es una separacion */}
          <div className='bg-orangebook relative col-span-4 row-span-2 text-4xl font-roboto text-white font-black cursor-pointer group hover:bg-orange-200'>
            <Link to='genre/cd49e523-5861-4669-9e26-8766812de9d5'>
              <div className='relative transition-all duration-500 h-full ease-in left-5'>
                <div className='absolute bottom-1 leading-10 font-roboto duration-500 group-hover:bottom-24 group-hover:text-bluebook'>
                  NARRATIVAS
                </div>
                <div className='absolute bottom-11 transition-opacity opacity-0 group-hover:opacity-100 max-w-[250px] leading-4 duration-300 text-[10px] text-bluebook'>
                  Historias atrapantes, novelas perfectas, ficción creativa de
                  amor, terror, suspenso, policiales, clásicos y contemporáneos
                  de todo el mundo.
                </div>
                <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-8 top-3 w-9 h-9'>
                  <img src={RedMark} alt='Marcador Rojo' />
                </div>
              </div>
            </Link>
          </div>
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          <div className='bg-redbook relative col-span-3 row-span-3 text-2xl font-roboto text-yellowbook font-black cursor-pointer group hover:bg-red-200'>
            <Link to='genre/ca9bc2d6-3d43-46d6-96b2-8e99b7453d00'>
              <div className='relative transition-all duration-500 h-full ease-in left-5'>
                <div className='absolute bottom-2 leading-6 font-roboto duration-500 group-hover:bottom-24 group-hover:text-bluebook'>
                  NO FICCIÓN <br />Y CRÓNICA
                </div>
              </div>
              <div className='absolute bottom-7 transition-opacity opacity-0 group-hover:opacity-100 max-w-[200px] left-5 leading-4 duration-200 text-[10px] text-bluebook'>
                Relatos en primera persona, periodismo, viajes, investigación y
                reflexión a través de historias reales.
              </div>
            </Link>
            <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-3 top-3 w-10 h-10'>
              <img src={RedMark} alt='Marcador Rojo' />
            </div>
          </div>
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          <div className='bg-pinkbook relative col-span-4 row-span-1 text-3xl font-roboto text-yellowbook font-black cursor-pointer group hover:bg-pink-200'>
            <Link to='genre/e60e1481-ce30-416b-a13a-8ed9c554dd11'>
              <div className='relative transition-all duration-500 h-full ease-in left-5'>
                <div className='absolute bottom-0 leading-1 font-roboto duration-500 group-hover:bottom-14 group-hover:text-bluebook'>
                  TEATRO
                </div>
              </div>
              <div className='absolute bottom-2 transition-opacity opacity-0 group-hover:opacity-100 max-w-[200px] left-5 leading-4 duration-200 text-[10px] text-bluebook'>
                Dramaturgia, historias basadas en diálogos, ensayos y
                reflexiones sobre el teatro.
              </div>
            </Link>
            <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-3 top-3 w-8 h-8'>
              <img src={RedMark} alt='Marcador Rojo' />
            </div>
          </div>
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          <div className='bg-yellowbook relative col-span-1 row-span-2 text-md font-roboto text-redbook font-black cursor-pointer group hover:bg-yellow-200'>
            <Link to='genre/156a7635-c01f-460d-8e0a-45c4402cd2d7'>
              <div className='relative transition-all duration-500 h-full ease-in left-1 font-roboto'>
                <div className='absolute bottom-2 font-roboto duration-500 group-hover:bottom-24 group-hover:text-bluebook'>
                  CIENCIA
                </div>
              </div>
              <div className='absolute bottom-1 transition-opacity opacity-0 group-hover:opacity-100 max-w-[200px] left-3 duration-200 text-[6px] text-bluebook'>
                Investigación y ensayo sobre ciencia, ecología, naturaleza,
                biología, medio ambiente, recursos, pensamiento lógico y
                matemático.
              </div>
            </Link>
            <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-2 top-2 w-5 h-5'>
              <img src={RedMark} alt='Marcador Rojo' />
            </div>
          </div>
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          <div className='bg-white relative col-span-4 row-span-1 text-xl font-roboto text-redbook font-black cursor-pointer group hover:bg-blue-200'>
            <Link to='genre/b0684c9f-8236-47b8-b4e3-600e3e2ca3eb'>
              <div className='relative transition-all duration-500 h-full ease-in left-5 font-roboto'>
                <div className='absolute bottom-1 font-roboto duration-500 group-hover:bottom-14 group-hover:text-bluebook'>
                  HISTORIA Y POLÍTICA
                </div>
              </div>
              <div className='absolute bottom-4 transition-opacity opacity-0 group-hover:opacity-100 max-w-[200px] left-5 duration-200 text-[8px] text-bluebook'>
                Análisis, periodismo, actualidad, ensayos y reflexiones sobre
                sucesos sociales, históricos y políticos. Relatos históricos y
                políticos.
              </div>
              <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-3 top-3 w-8 h-8'>
                <img src={RedMark} alt='Marcador Rojo' />
              </div>
            </Link>
          </div>
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          <div className='bg-white relative col-span-4 row-span-1 text-xl font-roboto text-bluebook font-black cursor-pointer group hover:bg-blue-200'>
            <Link to='genre/4375baed-ffaa-4d62-9643-9e0852eecfb0'>
              <div className='relative transition-all duration-500 h-full ease-in left-5'>
                <div className='absolute bottom-2 duration-500 group-hover:bottom-12 group-hover:text-bluebook'>
                  RELATOS BREVES
                </div>
              </div>
              <div className='absolute bottom-4 transition-opacity opacity-0 group-hover:opacity-100 max-w-[200px] left-5 duration-200 text-[10px] text-bluebook'>
                Lecturas rápidas y precisas, libros objetos, cuentos y relatos
                atrapantes.
              </div>
              <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-4 top-4 w-8 h-8'>
                <img src={RedMark} alt='Marcador Rojo' />
              </div>
            </Link>
          </div>
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          <div className='bg-bluebook relative col-span-4 row-span-2 text-xl font-roboto text-white font-black cursor-pointer group hover:bg-blue-200'>
            <Link to='genre/61b1d9bf-f5f0-41bc-9e2c-f236602d8d80'>
              <div className='relative transition-all duration-500 h-full ease-in left-5 font-roboto'>
                <div className='absolute bottom-2 duration-500 group-hover:bottom-24 group-hover:text-bluebook'>
                  PENSAMIENTOS <br /> Y FILOSOFÍA
                </div>
              </div>
              <div className='absolute bottom-4 transition-opacity opacity-0 group-hover:opacity-100 max-w-[200px] left-5 duration-200 text-[10px] text-bluebook'>
                Ensayos, pensamiento contemporáneo y clásico, nuevas filosofías,
                estudios del lenguaje, ambientalismo, economía y sociología.
              </div>
              <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-3 top-3 w-8 h-8'>
                <img src={RedMark} alt='Marcador Rojo' />
              </div>
            </Link>
          </div>
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          <div className='bg-orangebook relative col-span-1 row-span-2 text-md font-roboto text-yellowbook font-black cursor-pointer group hover:bg-orange-200'>
            <Link to='genre/093588bd-60fb-4887-be36-33eb90efd8de'>
              <div className='relative transition-all duration-500 h-full ease-in left-3'>
                <div className='absolute bottom-2 leading-5 font-roboto duration-500 group-hover:bottom-24 group-hover:text-bluebook'>
                  JÓVE
                  <br />
                  NES
                </div>
              </div>
              <div className='absolute bottom-3 transition-opacity opacity-0 group-hover:opacity-100 max-w-[200px] left-3 duration-200 text-[6px] text-bluebook'>
                Ensayos, pensamiento contemporáneo y clásico, nuevas filosofías,
                estudios del lenguaje, ambientalismo, economía y sociología.
              </div>
              <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-2 top-2 w-5 h-5'>
                <img src={RedMark} alt='Marcador Rojo' />
              </div>
            </Link>
          </div>
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          <div className='bg-yellowbook relative col-span-4 row-span-1 text-2xl font-roboto text-redbook font-black cursor-pointer group hover:bg-yellow-200'>
            <Link to='genre/86dee506-02e0-498b-8c0d-ae36712b61a1'>
              <div className='relative transition-all duration-500 h-full ease-in left-5'>
                <div className='absolute bottom-1 font-roboto duration-500 group-hover:bottom-14 group-hover:text-bluebook'>
                  POESÍA
                </div>
              </div>
              <div className='absolute bottom-2 transition-opacity opacity-0 group-hover:opacity-100 max-w-[250px] leading-4 left-5 duration-200 text-[9px] text-bluebook'>
                Ensayos, pensamiento contemporáneo y clásico, nuevas filosofías,
                estudios del lenguaje, ambientalismo, economía y sociología.
              </div>
              <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-2 top-2 w-6 h-6'>
                <img src={RedMark} alt='Marcador Rojo' />
              </div>
            </Link>
          </div>
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          <div className='bg-pinkbook relative col-span-3 row-span-1 font-roboto text-2xl text-bluebook font-black cursor-pointer group hover:bg-pink-200'>
            <Link to='genre/4fa6d874-f95b-47e4-9ccb-2a3b57abe41f'>
              <div className='relative transition-all duration-500 h-full ease-in left-5'>
                <div className='absolute bottom-1 font-roboto duration-500 group-hover:bottom-14 group-hover:text-bluebook'>
                  MÚSICA
                </div>
              </div>
              <div className='absolute bottom-2 transition-opacity opacity-0 group-hover:opacity-100 max-w-[250px] leading-4 left-5 duration-200 text-[9px] text-bluebook'>
                Novedades musicales, ensayos y reflexiones sobre la música.
                Historias con la música como protagonista.
              </div>
              <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-2 top-2 w-6 h-6'>
                <img src={RedMark} alt='Marcador Rojo' />
              </div>
            </Link>
          </div>
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          <div className='bg-redbook relative col-span-3 row-span-2 text-xl font-roboto text-white font-black cursor-pointer group hover:bg-red-200'>
            <Link to='genre/a59840fe-7f7a-4086-9966-d18725ab8e70'>
              <div className='relative transition-all duration-500 h-full ease-in left-3'>
                <div className='absolute bottom-1 left-1 font-roboto duration-500 group-hover:bottom-20 group-hover:text-bluebook'>
                  BIENESTAR Y <br /> ESPIRITUALIDAD
                </div>
              </div>
              <div className='absolute bottom-2 transition-opacity opacity-0 group-hover:opacity-100 max-w-[250px] leading-4 left-4 duration-200 text-[10px] text-bluebook'>
                Medicina del estilo de vida, terapias alternativas, yoga,
                budismo, ayurveda, neurociencia, magia y astrología.
              </div>
              <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-4 top-4 w-8 h-8'>
                <img src={RedMark} alt='Marcador Rojo' />
              </div>
            </Link>
          </div>
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          <div className='bg-white relative col-span-3 row-span-2 text-xl font-roboto text-orangebook font-black cursor-pointer group hover:bg-blue-200'>
            <Link to='genre/ac222fdc-e53d-4bbb-8726-03f5dbdd0823'>
              <div className='relative transition-all duration-500 h-full ease-in left-3'>
                <div className='absolute bottom-1 left-1 front-roboto duration-500 group-hover:bottom-20 group-hover:text-bluebook'>
                  NIÑOS Y NIÑAS
                </div>
              </div>
              <div className='absolute bottom-2 transition-opacity opacity-0 group-hover:opacity-100 max-w-[250px] leading-4 left-4 duration-200 text-[10px] text-bluebook'>
                Literatura infantil, narrativa inicial, audiolibros y historias
                dibujadas. Juegos y recreos literarios.
              </div>
              <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-4 top-4 w-8 h-8'>
                <img src={RedMark} alt='Marcador Rojo' />
              </div>
            </Link>
          </div>
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          {/* Esto es una separacion */}
          <div className='bg-pinkbook relative col-span-6 row-span-2 text-4xl font-roboto text-redbook font-black cursor-pointer group hover:bg-pink-200'>
            <Link to='genre/5a48caeb-d3cb-443c-a894-c620694e73a5'>
              <div className='relative transition-all duration-500 h-full ease-in left-3'>
                <div className='absolute bottom-1 left-1 front-roboto duration-500 group-hover:bottom-20 group-hover:text-bluebook'>
                  FEMINISMOS Y <br /> LGTBIQ
                </div>
              </div>
              <div className='absolute bottom-2 transition-opacity opacity-0 group-hover:opacity-100 max-w-[250px] leading-4 left-4 duration-200 text-[10px] text-bluebook'>
                Literatura diversa, autores trans, sexualidad, pensamiento
                feminista, mujeres, poesía y ensayo.
              </div>
              <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-5 top-5 w-10 h-10'>
                <img src={RedMark} alt='Marcador Rojo' />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
