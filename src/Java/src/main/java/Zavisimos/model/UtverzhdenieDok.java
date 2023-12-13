package Zavisimos.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Zavisimos.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: УтверждениеДок
 */
@Entity(name = "IISZavisimosУтверждениеДок")
@Table(schema = "public", name = "УтверждениеДок")
public class UtverzhdenieDok {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Утверждение")
    private String утверждение;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "AvPolzovateli")
    @Convert("AvPolzovateli")
    @Column(name = "АвПользователи", length = 16, unique = true, nullable = false)
    private UUID _avpolzovateliid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "AvPolzovateli", insertable = false, updatable = false)
    private AvPolzovateli avpolzovateli;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "FormaDokumenta")
    @Convert("FormaDokumenta")
    @Column(name = "ФормаДокумента", length = 16, unique = true, nullable = false)
    private UUID _formadokumentaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "FormaDokumenta", insertable = false, updatable = false)
    private FormaDokumenta formadokumenta;


    public UtverzhdenieDok() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getУтверждение() {
      return утверждение;
    }

    public void setУтверждение(String утверждение) {
      this.утверждение = утверждение;
    }


}