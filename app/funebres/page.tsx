import { FuneralNotice } from "@/types";
import CardFuneralNotice from "../components/CardFuneralNotice";
import { fetchFuneralNotices } from "../service/app.service";

export default async function FunebresPage() {
const funeralNoticesQuery = await fetchFuneralNotices({});


  const funeralNotices = funeralNoticesQuery.reduce((result: FuneralNotice[], current: FuneralNotice) => {
    const exist = result.some((item) => item.title === current.title);
    
    if (!exist) {
      result.push(current);
    }
    
    return result;
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 xl:mt-8">
      <article className="w-full flex items-start justify-start gap-4 px-2 xl:px-4">
        <div className="xl:w-[100%] flex flex-col gap-4">
          <header className="w-full flex flex-col items-start gap-4 md:flex-row md:justify-between">
            <h1 className="font-bold text-2xl">Avisos Fúnebres de hoy</h1>
            {/* <InputsSearch setDataInputs={setDataInputs} /> */}
          </header>
          <article className="w-full flex flex-wrap gap-4 justify-around">
            {funeralNotices.map((notice) => (
              <CardFuneralNotice key={notice._id} deceased={notice} />
            ))}
          </article>
        </div>
      </article>
    </section>
  );
}

/* .stnFunebre {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.stnFunebre__title {
  text-align: start;
  color: var(--colorBlack);
  font-weight: 700;
  margin-bottom: 0.5em;
  padding-left: 1em;
  font-size: var(--titleSections);
}

.stnFunebre__ctrCards {
  width: 100%;
  display: flex;
  overflow-x: scroll;
}

.stnFunebre__ctrCards::-webkit-scrollbar {
  -webkit-appearance: none;
}
 */
