import { ConnectButton } from "@rainbow-me/rainbowkit";
import MigrateTokens from "./_components/MigrateTokens";

export default async function Home() {
  return (
    <div className="mx-auto mt-10 max-w-[500px]">
      <div className="flex items-center justify-around py-8">
        <svg
          width="221"
          height="50"
          viewBox="0 0 221 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="title-svg-icon-logo"
        >
          <title id="title-svg-icon-logo">RWA app</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M62.0162 0.0176017C62.861 0.0175782 69.7779 0.0175597 76.6634 0.0176017C77.806 1.70781 85.059 15.8397 89.5111 23.913C91.1149 26.8211 92.4933 29.2008 92.5738 29.2005C92.6546 29.2005 93.9706 26.8209 95.4983 23.9127C97.026 21.0046 98.4287 18.4616 98.6154 18.2619C98.6763 18.1966 98.7257 18.1394 98.7856 18.1245C99.0944 18.0481 99.6809 19.0944 103.555 25.9416L106.028 30.3132L103.162 35.3124C99.3394 41.9798 98.1589 43.7321 96.08 45.8242C93.98 47.9377 90.2285 50.2641 89.7522 49.7481C89.583 49.5647 85.0459 41.5835 79.6697 32.012C74.2933 22.4405 68.8518 12.802 67.5772 10.5932C65.4926 6.98087 62.0162 1.27542 62.0162 0.0176017ZM10.1244 10.799C7.13643 9.58701 3.84778 5.69172 1.64367 0.753879L1.31502 0.0176068L24.1264 0.0269786C48.3136 0.0368814 48.9983 0.0682062 52.5422 1.32309C57.1909 2.96939 61.2637 7.013 62.861 11.5682C63.61 13.7048 63.8914 18.1347 63.4171 20.3267C62.9637 22.4214 61.4873 25.3379 60.0463 26.9853L58.8355 28.3692L65.7517 38.7581C69.5557 44.4721 72.7593 49.2978 72.871 49.4817C73.0312 49.7463 71.4826 49.8164 65.4696 49.8164H57.8658L52.6747 42.0365L47.484 34.2567L36.2338 34.3392L24.9837 34.4216L23.7023 35.1747C21.9963 36.1777 20.9198 37.6904 18.6791 42.2341C16.6052 46.4386 15.3779 47.9583 13.1992 49.0186C11.9486 49.6274 11.523 49.6748 6.4216 49.7733L0.978516 49.8788L1.57255 48.7099C3.0634 45.7763 10.3568 32.5812 11.6189 30.5341C13.4342 27.5906 15.6883 25.4404 18.2192 24.2386C21.6336 22.6172 22.6144 22.5173 35.176 22.5119C47.2397 22.5071 48.2411 22.4126 49.88 21.1235C50.7982 20.4011 51.6116 18.6616 51.6116 17.4204C51.6116 16.3299 50.775 14.3482 49.9333 13.4453C49.6115 13.0997 48.8658 12.5575 48.2767 12.2405C47.2188 11.6711 46.9893 11.6625 29.4014 11.5302C11.7541 11.3974 11.5839 11.391 10.1244 10.799ZM99.5483 12.8357C99.5478 11.5709 100.33 9.87001 103.195 4.9078L106.018 0.0176068H112.981H119.944L118.871 1.95869C118.28 3.02642 116.824 5.64326 115.634 7.77443C112.97 12.5447 112.916 12.9792 114.656 15.6997C115.309 16.7197 117.266 19.988 119.007 22.9628C120.748 25.9376 122.292 28.3836 122.439 28.3989C122.587 28.4139 124.514 25.1248 126.723 21.0892C128.932 17.0539 132.486 10.6646 134.621 6.89064L138.504 0.0288496L145.398 0.0232282C149.19 0.0200172 152.292 0.0925724 152.292 0.184141C152.292 0.275709 150.438 3.67916 148.173 7.74767C145.907 11.8159 141.859 19.1808 139.177 24.1138C136.495 29.0468 132.255 36.7876 129.755 41.3158L125.208 49.5487H122.441H119.674L114.07 39.7094C100.726 16.282 99.5486 14.1037 99.5483 12.8357ZM164.112 6.52625C166.272 2.92628 168.234 1.25401 171.301 0.400736C172.031 0.197524 174.317 0.0561559 177.105 0.0414324L181.703 0.0176068L193.86 19.4954C211.715 48.1013 212.507 49.399 212.223 49.5741C211.961 49.7366 198.631 49.6683 198.488 49.504C198.446 49.455 196.758 46.734 194.737 43.4577L191.063 37.5006L176.43 37.5124C161.066 37.5247 160.515 37.5635 159.229 38.7273C158.94 38.9884 157.806 40.976 156.707 43.1447C155.609 45.3134 154.382 47.4772 153.982 47.953C152.699 49.4777 151.981 49.629 145.398 49.761C142.121 49.8266 139.441 49.8054 139.441 49.7139C139.441 49.5203 146.041 37.7172 148.166 34.1102C150.779 29.6749 153.287 27.5545 157.338 26.3553L159.387 25.7489L157.111 25.7309C155.86 25.721 154.563 25.6399 154.229 25.5505C153.631 25.3901 153.639 25.3569 154.872 23.0774C157.596 18.0437 162.868 8.59986 164.112 6.52625ZM167.285 25.679C167.285 25.5092 168.942 22.2573 170.966 18.4523C172.991 14.6475 174.708 11.5383 174.782 11.5431C174.95 11.5538 183.349 25.5191 183.349 25.789C183.349 25.8985 179.735 25.9879 175.317 25.9879C169.428 25.9879 167.285 25.9055 167.285 25.679Z"
            fill="currentColor"
          ></path>
          <path
            d="M213.281 10.5994V0.099431H214.415V1.3125H214.554C214.64 1.17992 214.759 1.01089 214.912 0.805397C215.068 0.596591 215.29 0.410984 215.578 0.248579C215.87 0.0828593 216.264 0 216.761 0C217.404 0 217.971 0.160748 218.462 0.482244C218.952 0.80374 219.335 1.25947 219.61 1.84943C219.885 2.43939 220.023 3.13542 220.023 3.9375C220.023 4.74621 219.885 5.44721 219.61 6.04048C219.335 6.63044 218.954 7.08783 218.467 7.41264C217.979 7.73414 217.418 7.89489 216.781 7.89489C216.291 7.89489 215.898 7.81368 215.603 7.65128C215.308 7.48556 215.081 7.2983 214.922 7.08949C214.763 6.87737 214.64 6.7017 214.554 6.5625H214.455V10.5994H213.281ZM214.435 3.91761C214.435 4.49432 214.519 5.00308 214.688 5.44389C214.857 5.88139 215.104 6.22443 215.429 6.47301C215.754 6.71828 216.152 6.84091 216.622 6.84091C217.113 6.84091 217.522 6.71165 217.85 6.45312C218.182 6.19129 218.43 5.83996 218.596 5.39915C218.765 4.95502 218.849 4.46117 218.849 3.91761C218.849 3.38068 218.767 2.89678 218.601 2.46591C218.438 2.03172 218.192 1.68868 217.86 1.43679C217.532 1.18158 217.119 1.05398 216.622 1.05398C216.145 1.05398 215.744 1.17495 215.419 1.4169C215.094 1.65554 214.849 1.99029 214.683 2.42116C214.518 2.84872 214.435 3.34754 214.435 3.91761Z"
            fill="currentColor"
          ></path>
          <path
            d="M204.75 10.5994V0.099431H205.884V1.3125H206.023C206.109 1.17992 206.228 1.01089 206.381 0.805397C206.536 0.596591 206.759 0.410984 207.047 0.248579C207.339 0.0828593 207.733 0 208.23 0C208.873 0 209.44 0.160748 209.93 0.482244C210.421 0.80374 210.804 1.25947 211.079 1.84943C211.354 2.43939 211.491 3.13542 211.491 3.9375C211.491 4.74621 211.354 5.44721 211.079 6.04048C210.804 6.63044 210.423 7.08783 209.935 7.41264C209.448 7.73414 208.886 7.89489 208.25 7.89489C207.759 7.89489 207.367 7.81368 207.072 7.65128C206.777 7.48556 206.55 7.2983 206.391 7.08949C206.232 6.87737 206.109 6.7017 206.023 6.5625H205.923V10.5994H204.75ZM205.903 3.91761C205.903 4.49432 205.988 5.00308 206.157 5.44389C206.326 5.88139 206.573 6.22443 206.898 6.47301C207.223 6.71828 207.62 6.84091 208.091 6.84091C208.581 6.84091 208.991 6.71165 209.319 6.45312C209.65 6.19129 209.899 5.83996 210.065 5.39915C210.234 4.95502 210.318 4.46117 210.318 3.91761C210.318 3.38068 210.235 2.89678 210.07 2.46591C209.907 2.03172 209.66 1.68868 209.329 1.43679C209.001 1.18158 208.588 1.05398 208.091 1.05398C207.614 1.05398 207.213 1.17495 206.888 1.4169C206.563 1.65554 206.318 1.99029 206.152 2.42116C205.986 2.84872 205.903 3.34754 205.903 3.91761Z"
            fill="currentColor"
          ></path>
          <path
            d="M199.108 7.91477C198.624 7.91477 198.185 7.82363 197.791 7.64134C197.396 7.45573 197.083 7.18892 196.851 6.84091C196.619 6.48958 196.503 6.06534 196.503 5.56818C196.503 5.13068 196.589 4.77604 196.761 4.50426C196.934 4.22917 197.164 4.01373 197.453 3.85795C197.741 3.70218 198.059 3.58617 198.407 3.50994C198.758 3.4304 199.111 3.36742 199.466 3.32102C199.93 3.26136 200.306 3.21662 200.595 3.18679C200.886 3.15365 201.098 3.09896 201.231 3.02273C201.367 2.9465 201.435 2.81392 201.435 2.625V2.58523C201.435 2.0947 201.301 1.71354 201.032 1.44176C200.767 1.16998 200.364 1.03409 199.824 1.03409C199.264 1.03409 198.825 1.15672 198.506 1.40199C198.188 1.64725 197.965 1.90909 197.835 2.1875L196.722 1.78977C196.921 1.32576 197.186 0.964488 197.517 0.705965C197.852 0.444128 198.216 0.261836 198.611 0.15909C199.009 0.0530295 199.4 0 199.784 0C200.029 0 200.311 0.0298293 200.629 0.089488C200.951 0.145833 201.261 0.263493 201.559 0.442471C201.861 0.621448 202.111 0.891571 202.31 1.25284C202.509 1.61411 202.608 2.09801 202.608 2.70455V7.7358H201.435V6.7017H201.375C201.296 6.86742 201.163 7.04474 200.977 7.23366C200.792 7.42259 200.545 7.58333 200.237 7.71591C199.928 7.84848 199.552 7.91477 199.108 7.91477ZM199.287 6.8608C199.751 6.8608 200.142 6.76965 200.46 6.58736C200.782 6.40507 201.024 6.16974 201.186 5.88139C201.352 5.59304 201.435 5.28977 201.435 4.97159V3.89773C201.385 3.95739 201.276 4.01207 201.107 4.06179C200.941 4.10819 200.749 4.14962 200.53 4.18608C200.314 4.21922 200.104 4.24905 199.899 4.27557C199.696 4.29877 199.532 4.31866 199.406 4.33523C199.101 4.375 198.816 4.43963 198.551 4.52912C198.289 4.61529 198.077 4.74621 197.915 4.92187C197.756 5.09422 197.676 5.32954 197.676 5.62784C197.676 6.03551 197.827 6.34375 198.129 6.55256C198.434 6.75805 198.82 6.8608 199.287 6.8608Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="rounded-2xl bg-white p-4">
        <div className="flex items-center justify-between border-b pb-4">
          <div className="text-2xl font-semibold">Migrate</div>
          <div>
            <ConnectButton />
          </div>
        </div>
        <MigrateTokens />
      </div>
    </div>
  );
}
