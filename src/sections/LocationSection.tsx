import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import './LocationSection.css';

const stats = [
    { value: "200+", label: "TRUSTED\nCLIENTS" },
    { value: "7000+", label: "HOMES\nSERVICED" },
];

const MAPS_URL =
    "https://www.google.com/maps/place/27%C2%B054'12.0%22N+78%C2%B005'59.0%22E/@27.9033333,78.0997222,17z/data=!3m1!4b1!4m4!3m3!8m2!3d27.9033333!4d78.0997222?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D";

const EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3525.955681900625!2d78.0997222!3d27.903333300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDU0JzEyLjAiTiA3OMKwMDUnNTkuMCJF!5e0!3m2!1sen!2sin!4v1775366096118!5m2!1sen!2sin";

const LocationSection = () => (
    <section className="location-section">
        {/* Stats Bar */}
        <div className="location-stats">
            {stats.map((stat, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="location-stat-item"
                >
                    <p className="location-stat-val">
                        {stat.value}
                    </p>
                    <p className="location-stat-label">
                        {stat.label}
                    </p>
                </motion.div>
            ))}
        </div>

        {/* Map Section */}
        <div className="location-map-container">
            {/* Google Maps iframe */}
            <iframe
                src={EMBED_URL}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RAGHAV"
                className="location-iframe"
            />

            {/* Location card overlay — bottom-left */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="location-card"
            >
                <h3 className="location-card-title">
                    Our Location
                </h3>
                <div className="location-info-row">
                    <MapPin size={18} className="location-info-icon" />
                    <p className="location-info-text">
                        RAGHAV - FAN's | WIRE's | MCB's | APPLIANCES,<br />
                        ALIGARH, Uttar Pradesh
                    </p>
                </div>
                <div className="location-info-row">
                    <Clock size={18} className="location-info-icon" />
                    <p className="location-info-text">Mon–Sat: 10:30am–7:30pm</p>
                </div>
                <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="location-btn"
                >
                    GET DIRECTIONS
                </a>
            </motion.div>
        </div>
    </section>
);

export default LocationSection;
