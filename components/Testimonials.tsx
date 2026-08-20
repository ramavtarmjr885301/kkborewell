import { business } from "@/lib/business";
import StarRating from "./StarRating";

type Testimonial = {
    name: string;
    rating: number;
    text: string;
};

// Copy real reviews from your Google Business Profile here — name, star
// rating (1-5), and the review text. Do not invent entries; only paste
// what customers actually wrote on Google.
const testimonials: Testimonial[] = [
    {
        name: "Khushboo Shrivastav",
        rating: 5,
        text: "Kk boring is good and nice work.labour is very good behaviour. save my time very fast boring in 4 hours complete samarsebal pump and installation. I am very happy with the work. Thank you so much.",
    },
    {
        name: "Kishan Kumar",
        rating: 5,
        text: "Saved  my precious time.i advise you to work with kk borewell.thanks kk boring in greater noida",
    },
    {
        name: "Rahul Achwan Gujjar",
        rating: 5,
        text: "Kk borewell is very good in Greater Noida. Very loyal ownner",
    },
    {
        name: "Sumit Kumar",
        rating: 5,
        text: "Kk boring is the best boring for our journey home  the kk boring labour is very hard working  they complete my bore in 4 hours they save my important time",
    },
    {
        name: "Pradeep Singh",
        rating: 5,
        text: "Boring is very good. I am very much satisfied with their service. The all staff and workers have a very good behavior.",
    },
    {
        name: "Ghan Shyam",
        rating: 5,
        text: "Kk borewell good work done in the borewell and the guys here are also very good.kk borewell is best greater Noida",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-(--color-aqua-200)/40 py-20">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
                <div className="flex flex-wrap items-end justify-between gap-4">
                    <div className="max-w-xl">
                        <p className="font-mono text-xs uppercase tracking-widest text-(--color-rust-600)">
                            What customers say
                        </p>
                        <h2 className="mt-3 font-display text-3xl font-bold text-(--color-well-900) sm:text-4xl">
                            Reviews from Google
                        </h2>
                    </div>

                    <a
                        href={business.googleReviewsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-(--color-well-800) px-5 py-2.5 font-body text-sm font-semibold text-(--color-well-900) transition-colors hover:bg-(--color-well-800) hover:text-white"
                    >
                        Read all reviews on Google →
                    </a>
                </div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="flex flex-col rounded-2xl border border-(--color-line) bg-white p-6"
                        >
                            <StarRating rating={t.rating} />
                            <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-(--color-ink-900)/80">
                                &ldquo;{t.text}&rdquo;
                            </p>
                            <p className="mt-4 font-display text-sm font-semibold text-(--color-well-900)">
                                {t.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}