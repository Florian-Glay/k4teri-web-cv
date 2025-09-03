import Section from "../components/Section.jsx";
import GameEmbed from "../components/GameEmbed.jsx";
import { motion } from "framer-motion";
import { useLang, useLocaleLink } from "../lib/lang";

export default function ProjectUnity(){
  const { t } = useLang();
  const link = useLocaleLink();

  return (
    <>
      <Section
        title={t("projets.rpgUnity.rpg2d")}
        subtitle={t("projets.rpgUnity.pcOnly")}
      >
        {/* Charge /public/games/unity/index.html */}
        <GameEmbed slug="unity" height={720} />
      </Section>

      <Section title={t("projets.rpgUnity.pcOnly")} subtitle={" "}>
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
          <ul className="list-disc pl-5 text-neutral-300 text-sm space-y-1">
            <li>{t("projets.rpgUnity.move")}</li>
            <li>{t("projets.rpgUnity.selectItem")}</li>
            <li>{t("projets.rpgUnity.pickup")}</li>
            <li>{t("projets.rpgUnity.placeItem")}</li>
            <li>{t("projets.rpgUnity.inventory")}</li>
            <li>{t("projets.rpgUnity.attack")}</li>
          </ul>
        </div>
      </Section>

      <Section title="">
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
            <img src={`${import.meta.env.BASE_URL}assets/TheLoneWayToCraftImage-1.png`}  alt="The Lone Way To Craft Image 1" className="w-full h-full object-cover rounded-2xl" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
            <img src={`${import.meta.env.BASE_URL}assets/TheLoneWayToCraftImage-2.png`}  alt="The Lone Way To Craft Image 2" className="w-full h-full object-cover rounded-2xl" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
            <img src={`${import.meta.env.BASE_URL}assets/TheLoneWayToCraftImage-3.png`}  alt="The Lone Way To Craft Image 3" className="w-full h-full object-cover rounded-2xl" />
          </motion.div>
        </div>
      </Section>

      <Section title={t("projets.rpgUnity.features")}>
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
          <ul className="list-disc pl-5 text-neutral-300 text-sm space-y-1">
            <li>{t("projets.rpgUnity.inv")}</li>
            <li>{t("projets.rpgUnity.hud")}</li>
            <li>{t("projets.rpgUnity.dayNight")}</li>
            <li>{t("projets.rpgUnity.proceduralWorld")}</li>
          </ul>
        </div>
      </Section>
    </>
  );
}
