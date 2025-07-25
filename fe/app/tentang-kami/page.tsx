"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Book, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const tentangKami = () => {
  const router = useRouter();
  const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: "Sonner" }), 600));
  const [nama, setNama] = useState("");
  const [domisili, setDomisili] = useState("");
  const [ulasan, setUlasan] = useState("");

  const solutions = [
    {
      title: "Peta Budaya",
      link: "peta-budaya",
      description:
        "Jelajahi budaya dari 34 provinsi Indonesia secara interaktif, mulai dari adat istiadat, kuliner, tempat wisata hingga sejarah tradisional.",
      image: "images/map.png",
    },
    {
      title: "Kamus Nusantara",
      link: "kamus-nusantara",
      description:
        "Temukan arti kata dalam berbagai bahasa daerah Indonesia. Cari kata dan kenali artinya dari ribuan data bahasa nusantara di daerah lain.",
      image: "images/buku.png",
    },
    {
      title: "Komunitas",
      link: "komunitas",
      description:
        "Tempat berbagi cerita dan mengabadikan momen budaya dari daerahmu, agar seluruh Indonesia bisa melihat budaya kamu.",
      image: "images/galeri.png",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.promise(promise, {
      loading: "Loading...",
      success: (data) => {
        // kosongkan input setelah promise selesai
        setNama("");
        setDomisili("");
        setUlasan("");
        return "Ulasan berhasil dikirim!";
      },
      error: "Gagal mengirim ulasan",
    });
  };

  return (
    <>
      <section className="bg-hero-bg py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Hero Content */}
          <div className="mb-16">
            <h1 className="text- text-5xl md:text-6xl font-bold text-foreground mb-6">
              34 Provinsi
              <span className="ml-6 text-[#FF7D29]">7.241 Budaya</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">
              Indonesia, dengan 34 provinsi, adalah rumah bagi lebih dari 7.000 ragam budaya. Namun,
              ironisnya, data menunjukkan banyak dari warisan ini terasuk pupuk. Generasi muda kini semakin
              asing dengan budaya dan bahasa daerahnya sendiri. Sebuah kehilangan besar jika semua kekayaan
              ini lenyap begitu saja, bukan?
            </p>
          </div>

          {/* About Section */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Jejak Nusantara</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Jejak Nusantara hadir untuk menghadirkan dan melestarikan warisan budaya Indonesia. Melalui
                platform ini, masyarakat dapat menjelajahi kekayaan budaya dari 34 provinsi, mencakup bahasa
                daerah, adat istiadat, kesenian, kuliner tradisional, hingga alat musik khas. Jejak Nusantara
                menjadi jembatan antara generasi muda dan nilai-nilai budaya leluhur.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dengan menyajak semua pihak untuk ikut berkontribusi dalam pelestarian budaya, agar identitas
                bangsa tetap hidup, dikenali, dan diwarisiakn dari generasi ke generasi.
              </p>
            </div>

            <div className="flex justify-center">
              <img src="images/about.svg" alt="Cultural Heritage Illustration" className="h-96" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-section-bg py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#FF7D29] font-bold mb-2 text-2xl tracking-widest">SOLUSI KITA</p>
            <h2 className="text-4xl font-bold">Jejak Nusantara</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                onClick={() => {
                  router.push(solution.link);
                }}
                className="cursor-pointer group transition-all duration-250 bg-card border-border hover:bg-[#E1752E] hover:shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-28 h-28 p-6 rounded-full flex items-center justify-center bg-[#F4F4F4] mb-6 mx-auto">
                    <img src={solution.image} alt={solution.title} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground duration-250 group-hover:text-white mb-4">
                    {solution.title}
                  </h3>
                  <p className="duration-250 group-hover:text-white leading-relaxed text-black/50">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-contact-bg py-16 px-6">
        <div className="max-w-7xl rounded-2xl mx-auto bg-linear-to-tl from-[#7B4019] to-[#E1752E]">
          <img src="images/komponen-lingkaran.png" alt="hiasan-lingkaran" className="absolute w-32" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Illustration */}
            <div className="flex justify-center">
              <img
                src="images/ulasan vector.png"
                alt="Contact Illustration"
                className="w-full max-w-md h-auto"
              />
            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Tulis ulasan Kamu terhadap Jejak Nusantara!
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <Input
                    placeholder="Nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white"
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Domisili"
                    value={domisili}
                    onChange={(e) => setDomisili(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tuliskan ulasan Anda"
                    rows={7}
                    value={ulasan}
                    onChange={(e) => setUlasan(e.target.value)}
                    className="bg-white/20 text-white placeholder:text-white/70 resize-none"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="cursor-pointer text-white bg-[#FF7D29] font-medium py-5 px-8 rounded-full"
                  >
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default tentangKami;
