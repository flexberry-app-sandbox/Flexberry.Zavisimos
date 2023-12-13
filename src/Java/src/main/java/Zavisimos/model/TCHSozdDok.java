package Zavisimos.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Zavisimos.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧСоздДок
 */
@Entity(name = "IISZavisimosТЧСоздДок")
@Table(schema = "public", name = "ТЧСоздДок")
public class TCHSozdDok {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "FormaDokumenta")
    @Convert("FormaDokumenta")
    @Column(name = "ФормаДокумента", length = 16, unique = true, nullable = false)
    private UUID _formadokumentaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "FormaDokumenta", insertable = false, updatable = false)
    private FormaDokumenta formadokumenta;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DokumentNeUt")
    @Convert("DokumentNeUt")
    @Column(name = "ДокументНеУт", length = 16, unique = true, nullable = false)
    private UUID _dokumentneutid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DokumentNeUt", insertable = false, updatable = false)
    private DokumentNeUt dokumentneut;


    public TCHSozdDok() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}