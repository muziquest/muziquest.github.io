import { useEffect, useRef } from "react";
import { ReleaseGroup } from "@/components/Card";
import Rating from "@/components/Rating";

interface Props {
  selected: ReleaseGroup | null;
  onClose: () => void;
}

export default function Modal({ selected, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const elem = ref.current;
    if (!elem) return;

    if (selected) {
      if (!elem.open) {
        elem.showModal();
      }
    } else {
      elem.close();
    }
  }, [selected]);

  return (
    <dialog ref={ref} onClose={onClose} className="modal">
      {selected && (
        <>
          <div className="modal-box card p-0">
            <figure className="not-prose">
              <img
                src={`https://coverartarchive.org/release-group/${selected.id}/front`}
                alt="Shoes"
              />
            </figure>
            <div className="card-body pt-0">
              <h2 className="card-title">
                {selected.artist}
                <span className="text-neutral-content">-</span>
                <a href={`https://listenbrainz.org/album/${selected.id}/`}>
                  {selected.title}
                </a>
              </h2>
              <div className="mb-4 flex flex-start items-center text-center">
                <span className="mr-2 text-lg">{selected.rating} / 10</span>
                <Rating rating={selected.rating} />
              </div>
              {selected.tags.map((tag, i) => (
                <div key={i} className="badge badge-neutral">
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </>
      )}
    </dialog>
  );
}
