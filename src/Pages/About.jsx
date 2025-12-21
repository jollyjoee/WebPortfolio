import Mugshot from '../assets/mugshot.png'

function About() {
    return (
        <div className="min-w-full min-h-120 flex flex-wrap flex-col gap-5">
            <div className='text-4xl font2 text-center'>ABOUT ME</div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9200.138580174866!2d121.00639212433775!3d14.184129184695344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd7bea47823f65%3A0x7de76e34763f2e1b!2sLumil%2C%20Silang%2C%20Cavite!5e0!3m2!1sen!2sph!4v1766340359082!5m2!1sen!2sph"
                loading="lazy"
                className='w-full h-full rounded-2xl grow'
            />
        </div>
    )
}

export default About;