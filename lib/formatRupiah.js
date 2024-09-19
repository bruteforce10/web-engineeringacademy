function formatRupiah(angka) {
  return `Rp${angka.toLocaleString("id-ID", { minimumFractionDigits: 0 })}`;
}

export default formatRupiah;
