import { easeOut } from "motion";
import { motion } from "motion/react"
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero  py-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="flex-1">
                        <motion.img
                            src={team1}
                            className="max-w-sm rounded-tr-4xl rounded-tl-4xl rounded-br-4xl   border-t border-r border-sky-200 border-4"
                            animate={{ y: [50, 100, 50] }}
                            transition={{ duration: 5, repeat: Infinity }}
                        />
                        <motion.img
                            src={team2}
                            className="max-w-sm rounded-tr-4xl rounded-tl-4xl rounded-br-4xl   border-t border-r border-amber-700 border-4"
                            animate={{ x: [100, 150, 100] }}
                            transition={{ duration: 5, repeat: Infinity }}
                        />

                    </div>
                    <div className="flex-1">
                        <motion.h1
                            animate={{ x: [0, 50, 0] }}
                            transition={{ duration: 10, delay: 3, ease: easeOut, repeat: Infinity }}
                            className="text-5xl font-bold">Latest Jobs <motion.span
                                animate={{ color: ['#ecff33', '#33ffe5'] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >for You!</motion.span></motion.h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;