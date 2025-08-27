import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../components/Section.jsx";
import { videos } from "../data/music.js";

export default function Music(){
  const [current, setCurrent] = useState(videos[0]?.id);

  const Card = ({ id, title }) => (
    <motion.button
      whileHover={{ scale: 1.02 }}
      onClick={() => setCurrent(id)}
      className="text-left rounded-2xl"
    >
      <div className="bg-gradient-to-tr from-accent via-purple-600 to-pink-500 p-[2px] rounded-2xl">
        <div className="bg-neutral-950 rounded-2xl overflow-hidden">
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt={title}
            className="w-full aspect-video object-cover"
          />
          <div className="p-4">
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm text-neutral-400">@K4TERI4music</p>
          </div>
        </div>
      </div>
    </motion.button>
  );

  return (
    <>
      <Section title="K4TERI — Musique" subtitle="Sélectionne une miniature pour jouer la vidéo.">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl overflow-hidden">
          {current && (
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${current}`}
              title="YouTube player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>
      </Section>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map(v => (
            <Card key={v.id} id={v.id} title={v.title} />
          ))}
        </div>
      </Section>
    </>
  );
}
