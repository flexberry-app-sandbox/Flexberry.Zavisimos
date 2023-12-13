package Zavisimos.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Zavisimos.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: АвПользователи
 */
@Entity(name = "IISZavisimosАвПользователи")
@Table(schema = "public", name = "АвПользователи")
public class AvPolzovateli {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаРегистрации")
    private Date датарегистрации;

    @Column(name = "Логин")
    private String логин;

    @Column(name = "Пароль")
    private String пароль;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;

    @OneToMany(mappedBy = "avpolzovateli", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHPrava> tchpravas;


    public AvPolzovateli() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаРегистрации() {
      return датарегистрации;
    }

    public void setДатаРегистрации(Date датарегистрации) {
      this.датарегистрации = датарегистрации;
    }

    public String getЛогин() {
      return логин;
    }

    public void setЛогин(String логин) {
      this.логин = логин;
    }

    public String getПароль() {
      return пароль;
    }

    public void setПароль(String пароль) {
      this.пароль = пароль;
    }


}