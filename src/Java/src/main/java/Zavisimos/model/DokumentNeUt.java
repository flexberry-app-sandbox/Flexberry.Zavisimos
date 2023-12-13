package Zavisimos.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Zavisimos.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ДокументНеУт
 */
@Entity(name = "IISZavisimosДокументНеУт")
@Table(schema = "public", name = "ДокументНеУт")
public class DokumentNeUt {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаСохранения")
    private Date датасохранения;

    @OneToMany(mappedBy = "dokumentneut", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHUtverzhDok> tchutverzhdoks;

    @OneToMany(mappedBy = "dokumentneut", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHSozdDok> tchsozddoks;


    public DokumentNeUt() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаСохранения() {
      return датасохранения;
    }

    public void setДатаСохранения(Date датасохранения) {
      this.датасохранения = датасохранения;
    }


}